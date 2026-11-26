<?php

interface TaskCollection
{
    /** @return list<array{id: int, title: string, status: string}> */
    public function all(): array;
}

final class ArrayTaskCollection implements TaskCollection
{
    /** @param list<array{id: int, title: string, status: string}> $tasks */
    public function __construct(private readonly array $tasks) {}

    public function all(): array
    {
        return $this->tasks;
    }
}

final class JsonTaskCollection implements TaskCollection
{
    public function __construct(private readonly string $json) {}

    public function all(): array
    {
        return json_decode($this->json, true, flags: JSON_THROW_ON_ERROR);
    }
}

final class TaskListPrinter
{
    public function render(TaskCollection $collection): string
    {
        $lines = [];
        foreach ($collection->all() as $task) {
            $lines[] = sprintf('%d: %s (%s)', $task['id'], $task['title'], $task['status']);
        }
        return implode(PHP_EOL, $lines) . PHP_EOL;
    }
}

$tasks = [
    ['id' => 201, 'title' => 'Draft backlog', 'status' => 'todo'],
    ['id' => 202, 'title' => 'Assign developers', 'status' => 'in_progress'],
];
$json = json_encode($tasks, JSON_THROW_ON_ERROR);
$printer = new TaskListPrinter();

echo "Array collection:\n";
echo $printer->render(new ArrayTaskCollection($tasks));
echo "JSON collection:\n";
echo $printer->render(new JsonTaskCollection($json));
