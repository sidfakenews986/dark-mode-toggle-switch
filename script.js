// Reference to the toggle switch element
const toggleSwitch = document.getElementById('mode-toggle');
// Reference to the text showing the current mode
const currentModeText = document.getElementById('current-mode');

// Function to toggle between light and dark mode
function toggleMode() {
    // Check the state of the toggle switch
    if (toggleSwitch.checked) {
        // Activate dark mode
        document.body.classList.add('dark-mode');
        currentModeText.textContent = 'Dunkel';
        localStorage.setItem('theme', 'dark');
    } else {
        // Activate light mode
        document.body.classList.remove('dark-mode');
        currentModeText.textContent = 'Hell';
        localStorage.setItem('theme', 'light');
    }
}

// Check if a theme preference is stored in local storage
if (localStorage.getItem('theme') === 'dark') {
    // Set toggle switch to checked
    toggleSwitch.checked = true;
    // Apply dark mode from local storage
    document.body.classList.add('dark-mode');
    currentModeText.textContent = 'Dunkel';
}

// Add event listener to toggle mode on change
toggleSwitch.addEventListener('change', toggleMode);