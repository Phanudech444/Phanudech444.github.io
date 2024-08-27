document.addEventListener('DOMContentLoaded', function() {
    fetch('schedule.json')
        .then(response => response.json())
        .then(data => {
            const calendarCells = document.querySelectorAll('.calendar td');
            calendarCells.forEach(cell => {
                const date = cell.getAttribute('data-date');
                if (data[date]) {
                    cell.classList.add(data[date]);
                }
            });
        });
});
