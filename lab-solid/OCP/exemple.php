<?php

interface TaskExporter
{
    /** @param list<array{id: int, title: string, status: string}> $tasks */
    public function export(array $tasks): string;
}

final class JsonTaskExporter implements TaskExporter
{
    public function export(array $tasks): string
    {
        return json_encode($tasks, JSON_PRETTY_PRINT | JSON_THROW_ON_ERROR);
    }
}

final class CsvTaskExporter implements TaskExporter
{
    public function export(array $tasks): string
    {
        $stream = fopen('php://temp', 'r+');
        if ($stream === false) {
            throw new RuntimeException('Unable to create the temporary CSV stream.');
        }

        fputcsv($stream, ['id', 'title', 'status'], ',', '"', '');
        foreach ($tasks as $task) {
            fputcsv($stream, $task, ',', '"', '');
        }
        rewind($stream);
        $csv = stream_get_contents($stream);
        fclose($stream);

        if ($csv === false) {
            throw new RuntimeException('Unable to read the temporary CSV stream.');
        }
        return $csv;
    }
}

final class TaskReportService
{
    public function create(array $tasks, TaskExporter $exporter): string
    {
        return $exporter->export($tasks);
    }
}

$tasks = [['id' => 101, 'title' => 'Plan sprint', 'status' => 'todo']];
$service = new TaskReportService();

echo "JSON export:\n";
echo $service->create($tasks, new JsonTaskExporter()) . PHP_EOL;
echo "CSV export:\n";
echo $service->create($tasks, new CsvTaskExporter());
