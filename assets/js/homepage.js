function redirectToEvents() {
    window.location.href = "events.html";
}

function redirectToSmartHome() {
    window.location.href = "smart-home.html";
}

function redirectToSettings() {
    window.location.href = "settings.html";
}

function callEmergency() {
    // Implement emergency call functionality
}

document.addEventListener("DOMContentLoaded", function () {
    // Wait for the document to be fully loaded before running the script

    // Get the current date
    const currentDate = new Date();
    const currentHour = currentDate.getHours();

    // Get the greeting message based on the time of day
    let greeting;
    if (currentHour < 12) {
        greeting = "Good morning!";
    } else if (currentHour < 18) {
        greeting = "Good afternoon!";
    } else {
        greeting = "Good evening!";
    }

    // Display the greeting on the homepage
    const greetingElement = document.getElementById("greeting");
    greetingElement.textContent = greeting;
});