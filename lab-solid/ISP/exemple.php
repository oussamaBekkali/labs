<?php

final class Task
{
    public function __construct(
        public readonly int $id,
        public readonly string $title,
        public readonly string $status,
    ) {}
}

interface TaskReader
{
    public function findById(int $id): ?Task;
}

interface TaskWriter
{
    public function save(Task $task): void;
    public function delete(int $id): void;
}

final class InMemoryTaskRepository implements TaskReader, TaskWriter
{
    /** @var array<int, Task> */
    private array $tasks = [];

    public function findById(int $id): ?Task
    {
        return $this->tasks[$id] ?? null;
    }

    public function save(Task $task): void
    {
        $this->tasks[$task->id] = $task;
    }

    public function delete(int $id): void
    {
        unset($this->tasks[$id]);
    }
}

final class TaskDashboard
{
    public function __construct(private readonly TaskReader $reader) {}

    public function showTask(int $id): string
    {
        $task = $this->reader->findById($id);
        if ($task === null) {
            return sprintf("Task #%d was not found.\n", $id);
        }
        return sprintf("Task #%d: %s (%s)\n", $task->id, $task->title, $task->status);
    }
}

$repository = new InMemoryTaskRepository();
$repository->save(new Task(301, 'Estimate release', 'todo'));

echo (new TaskDashboard($repository))->showTask(301);
