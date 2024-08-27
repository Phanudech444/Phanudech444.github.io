function openAlert(alertId) {
    document.getElementById('overlay').classList.add('show');
    document.getElementById(alertId).classList.add('show');
}

function closeAlert(alertId) {
    document.getElementById('overlay').classList.remove('show');
    document.getElementById(alertId).classList.remove('show');
}

function openTimeSelection() {
    document.getElementById('overlay').classList.add('show');
    document.getElementById('time-selection-box').classList.add('show');
}

function closeTimeSelection() {
    document.getElementById('overlay').classList.remove('show');
    document.getElementById('time-selection-box').classList.remove('show');
}

// Close popup when clicking outside of it
document.getElementById('overlay').addEventListener('click', function(event) {
    if (event.target === this) {
        closeAlert('alert-box-1'); // Adjust as needed
        closeAlert('alert-box-2'); // Adjust as needed
        closeTimeSelection();
    }
});
