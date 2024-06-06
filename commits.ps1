$startDate = "2024-01-01"
$endDate = "2024-04-10"
git log --since=$startDate --until=$endDate --format='%aN' | Sort-Object -Unique | ForEach-Object {
    $author = $_
    $linesStats = git log --author="$author" --since=$startDate --until=$endDate --numstat --format='%n' | Where-Object { $_ -match '^\d' } | ForEach-Object {
        $fields = $_ -split '\t'
        [PSCustomObject]@{
            LinesAdded = [int]$fields[0]
            LinesDeleted = [int]$fields[1]
        }
    }
    $totalLinesAdded = ($linesStats | Measure-Object -Property LinesAdded -Sum).Sum
    $totalLinesDeleted = ($linesStats | Measure-Object -Property LinesDeleted -Sum).Sum
    [PSCustomObject]@{
        Author = $author
        LinesAdded = $totalLinesAdded
        LinesDeleted = $totalLinesDeleted
    }
} | Sort-Object LinesAdded -Descending