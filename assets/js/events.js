function setAlarm() {
    const eventTime = document.getElementById("event-time").value;
    const eventLabel = document.getElementById("event-label").value;

    if (eventTime && eventLabel) {
        // Create an event object
        const event = {
            time: eventTime,
            label: eventLabel,
            active: true, // You can add this to control active events
        };

        // Store the event in localStorage
        const alarms = JSON.parse(localStorage.getItem("alarms")) || [];
        alarms.push(alarm);
        localStorage.setItem("alarms", JSON.stringify(alarms));

        // Display the alarm
        displayAlarm(alarm);

        // Inform the user
        alert('Event set successfully!');
    } else {
        alert('Please fill in both time and event label.');
    }
}

function displayAlarm(alarm) {
    const alarmList = document.getElementById("alarm-list");
    const alarmItem = document.createElement("div");
    alarmItem.classList.add("alarm-item");
    alarmItem.innerHTML = `<p>${alarm.label} at ${alarm.time}</p>`;
    alarmList.appendChild(alarmItem);
}