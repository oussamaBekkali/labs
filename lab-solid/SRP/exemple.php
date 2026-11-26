<?php

final class Task
{
    public function __construct(
        public readonly string $title,
        public readonly string $status,
    ) {
    }
}

final class TaskStatusSummary
{
    /** @param list<Task> $tasks */
    public function countByStatus(array $tasks): array
    {
        $counts = [];
        foreach ($tasks as $task) {
            $counts[$task->status] = ($counts[$task->status] ?? 0) + 1;
        }
        return $counts;
    }
}

final class TaskSummaryPresenter
{
    public function render(array $counts): string
    {
        $lines = ['Task summary'];
        foreach ($counts as $status => $count) {
            $lines[] = sprintf('%s: %d', $status, $count);
        }
        return implode(PHP_EOL, $lines) . PHP_EOL;
    }
}

$tasks = [
    new Task('Prepare sprint plan', 'todo'),
    new Task('Review the API', 'in_progress'),
    new Task('Estimate release', 'todo'),
];

$counts = (new TaskStatusSummary())->countByStatus($tasks);
echo (new TaskSummaryPresenter())->render($counts);
