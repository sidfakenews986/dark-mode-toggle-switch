// Referenz auf das Toggle-Schalter-Element
const toggleSwitch = document.getElementById('mode-toggle');
// Referenz auf den Text, der den aktuellen Modus zeigt
const currentModeText = document.getElementById('current-mode');

// Funktion, um zwischen Licht- und Dunkelmodus zu wechseln
function toggleMode() {
    // Überprüfen Sie den Zustand des Toggle-Schalters
    if (toggleSwitch.checked) {
        // Dunkelmodus aktivieren
        document.body.classList.add('dark-mode');
        currentModeText.textContent = 'Dunkel';
        localStorage.setItem('theme', 'dark');
    } else {
        // Lichtmodus aktivieren
        document.body.classList.remove('dark-mode');
        currentModeText.textContent = 'Hell';
        localStorage.setItem('theme', 'light');
    }
}

// Überprüfen, ob eine Themenpräferenz im lokalen Speicher gespeichert ist
if (localStorage.getItem('theme') === 'dark') {
    // Setzen Sie den Toggle-Schalter auf 'checked'
    toggleSwitch.checked = true;
    // Dunkelmodus aus dem lokalen Speicher anwenden
    document.body.classList.add('dark-mode');
    currentModeText.textContent = 'Dunkel';
}

// Fügen Sie einen Ereignis-Listener hinzu, um den Modus bei Änderung umzuschalten
toggleSwitch.addEventListener('change', toggleMode);