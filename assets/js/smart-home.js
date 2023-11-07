function saveSmartHomeSettings() {
    const lights = document.getElementById("lights").checked;
    const temperature = document.getElementById("temperature").value;
    const blinds = document.getElementById("blinds").value;

    // Store the smart home settings in localStorage
    const smartHomeSettings = {
        lights: lights,
        temperature: temperature,
        blinds: blinds,
    };

    localStorage.setItem('smartHomeSettings', JSON.stringify(smartHomeSettings));

    // Inform the user
    alert('Smart home settings saved successfully!');
}

// lights

const allOnButton = document.getElementById("all-on");
const allOffButton = document.getElementById("all-off");
const bedroomLightButton = document.getElementById("bedroom-light");
const livingRoomLightButton = document.getElementById("living-room-light");
const kitchenLightButton = document.getElementById("kitchen-light");

const bedroomStatus = document.getElementById("bedroom-status");
const livingRoomStatus = document.getElementById("living-room-status");
const kitchenStatus = document.getElementById("kitchen-status");

let allLightsOn = false;
let bedroomLightOn = false;
let livingRoomLightOn = false;
let kitchenLightOn = false;

function updateStatus() {
    allLightsOn = bedroomLightOn && livingRoomLightOn && kitchenLightOn;

    bedroomStatus.textContent = bedroomLightOn ? "On" : "Off";
    livingRoomStatus.textContent = livingRoomLightOn ? "On" : "Off";
    kitchenStatus.textContent = kitchenLightOn ? "On" : "Off";

    updateButtonStyles(allLightsOn, "all-on");
    updateButtonStyles(allLightsOn, "all-off");
    updateButtonStyles(bedroomLightOn, "bedroom-light");
    updateButtonStyles(livingRoomLightOn, "living-room-light");
    updateButtonStyles(kitchenLightOn, "kitchen-light");
}

function updateButtonStyles(isOn, buttonId) {
    const button = document.getElementById(buttonId);
    if (isOn) {
        button.classList.add("on");
        button.classList.remove("off");
    } else {
        button.classList.remove("on");
        button.classList.add("off");
    }
}

allOnButton.addEventListener("click", () => {
    bedroomLightOn = true;
    livingRoomLightOn = true;
    kitchenLightOn = true;
    updateStatus();
});

allOffButton.addEventListener("click", () => {
    bedroomLightOn = false;
    livingRoomLightOn = false;
    kitchenLightOn = false;
    updateStatus();
});

bedroomLightButton.addEventListener("click", () => {
    bedroomLightOn = !bedroomLightOn;
    updateStatus();
});

livingRoomLightButton.addEventListener("click", () => {
    livingRoomLightOn = !livingRoomLightOn;
    updateStatus();
});

kitchenLightButton.addEventListener("click", () => {
    kitchenLightOn = !kitchenLightOn;
    updateStatus();
});

updateStatus();
