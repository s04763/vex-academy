const addDeviceBtn = document.getElementById("addDeviceBtn");
const deviceSelector = document.getElementById("deviceSelector");
const portSelector = document.getElementById("portSelector");
const deviceList = document.getElementById("deviceList");

let selectedDevice = null;

addDeviceBtn.addEventListener("click", () => {
    deviceSelector.classList.remove("hidden");
});

document.querySelectorAll(".device-option").forEach(button => {

    button.addEventListener("click", () => {

        selectedDevice = button.textContent;

        deviceSelector.classList.add("hidden");
        portSelector.classList.remove("hidden");

    });

});

document.querySelectorAll(".port-btn").forEach(button => {

    button.addEventListener("click", () => {

        const port = button.textContent;

        const card = document.createElement("div");

        card.className = "device-card";

        card.innerHTML = `
            <strong>${selectedDevice}</strong><br>
            Port ${port}
        `;

        deviceList.appendChild(card);

        portSelector.classList.add("hidden");

    });

});
