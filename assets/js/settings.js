// Retrieve and apply user settings
function applyUserSettings() {
    const userSettings = JSON.parse(localStorage.getItem("userSettings")) || {};

    // Language
    const languageSelect = document.getElementById("language");
    if (userSettings.language) {
        languageSelect.value = userSettings.language;
    }

    // Text-to-Speech
    const textToSpeechCheckbox = document.getElementById("text-to-speech");
    if (userSettings.textToSpeech) {
        textToSpeechCheckbox.checked = true;
    }

    // Dark Mode
    const darkModeCheckbox = document.getElementById("dark-mode");
    if (userSettings.darkMode) {
        darkModeCheckbox.checked = true;
        enableDarkMode();
    }
}

// Save and update user settings
function saveUserSettings() {
    const language = document.getElementById("language").value;
    const textToSpeech = document.getElementById("text-to-speech").checked;
    const darkMode = document.getElementById("dark-mode").checked;

    // Store user settings in localStorage
    const userSettings = {
        language: language,
        textToSpeech: textToSpeech,
        darkMode: darkMode,
    };

    localStorage.setItem('userSettings', JSON.stringify(userSettings));

    // Apply changes to the user interface
    applyUserSettings();

    // Inform the user
    alert('User settings saved successfully!');
}

// Enable dark mode
function enableDarkMode() {
    document.body.classList.add('dark-mode');
}

// Disable dark mode
function disableDarkMode() {
    document.body.classList.remove('dark-mode');
}

// Apply user settings on page load
applyUserSettings();
