const toggleSwitch = document.getElementById('mode-toggle');
const currentModeText = document.getElementById('current-mode');

// Funktion zum Umschalten des Modus
function toggleMode() {
    if (toggleSwitch.checked) {
        document.body.classList.add('dark-mode');
        currentModeText.textContent = 'Dunkel';
        localStorage.setItem('theme', 'dark');
    } else {
        document.body.classList.remove('dark-mode');
        currentModeText.textContent = 'Hell';
        localStorage.setItem('theme', 'light');
    }
}

// Prüfen, ob eine Auswahl im lokalen Speicher vorhanden ist
if (localStorage.getItem('theme') === 'dark') {
    toggleSwitch.checked = true;
    document.body.classList.add('dark-mode');
    currentModeText.textContent = 'Dunkel';
}

// Event Listener hinzufügen
toggleSwitch.addEventListener('change', toggleMode);