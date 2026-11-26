<?php

final class Task
{
    public function __construct(public readonly string $status) {}
}

interface TaskReader
{
    /** @return list<Task> */
    public function all(): array;
}

final class ArrayTaskReader implements TaskReader
{
    /** @param list<Task> $tasks */
    public function __construct(private readonly array $tasks) {}

    public function all(): array
    {
        return $this->tasks;
    }
}

final class JsonStringTaskReader implements TaskReader
{
    public function __construct(private readonly string $json) {}

    public function all(): array
    {
        $rows = json_decode($this->json, true, flags: JSON_THROW_ON_ERROR);
        return array_map(static fn(array $row): Task => new Task($row['status']), $rows);
    }
}

final class TaskStatusReport
{
    public function __construct(private readonly TaskReader $reader) {}

    public function render(): string
    {
        $counts = [];
        foreach ($this->reader->all() as $task) {
            $counts[$task->status] = ($counts[$task->status] ?? 0) + 1;
        }

        $lines = [];
        foreach ($counts as $status => $count) {
            $lines[] = sprintf('%s: %d', $status, $count);
        }
        return implode(PHP_EOL, $lines) . PHP_EOL;
    }
}

$tasks = [new Task('todo'), new Task('in_progress')];
$json = json_encode(
    array_map(static fn(Task $task): array => ['status' => $task->status], $tasks),
    JSON_THROW_ON_ERROR,
);

echo "Array source:\n";
echo (new TaskStatusReport(new ArrayTaskReader($tasks)))->render();
echo "JSON-string source:\n";
echo (new TaskStatusReport(new JsonStringTaskReader($json)))->render();
