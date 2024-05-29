// Get the toggle switch element
const toggleSwitch = document.querySelector('#checkbox');

// Function to switch theme
function switchTheme() {
    if (toggleSwitch.checked) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
}

// Event listener for toggle switch
toggleSwitch.addEventListener('change', switchTheme);
