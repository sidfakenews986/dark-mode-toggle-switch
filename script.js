// Reference to the toggle switch element
const toggleSwitch = document.getElementById('mode-toggle');
// Reference to the text showing the current mode
const currentModeText = document.getElementById('current-mode');

// Function to toggle between light and dark mode
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

// Check if a theme preference is stored in local storage
if (localStorage.getItem('theme') === 'dark') {
    toggleSwitch.checked = true;
    document.body.classList.add('dark-mode');
    currentModeText.textContent = 'Dunkel';
}

// Add event listener to toggle mode on change
toggleSwitch.addEventListener('change', toggleMode);