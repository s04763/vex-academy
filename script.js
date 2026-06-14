const addDeviceBtn = document.getElementById("addDeviceBtn");
const deviceSelector = document.getElementById("deviceSelector");
const portSelector = document.getElementById("portSelector");
const deviceList = document.getElementById("deviceList");
const usedPorts = new Set();

let selectedDevice = null;
let drivetrainStep = null;
let drivetrainPorts = [];

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

        const port = Number(button.textContent);

        if (usedPorts.has(port)) {
            return;
        }

        if (selectedDevice === "Drivetrain") {

            if (drivetrainPorts.length === 0) {

                drivetrainPorts.push(port);

                alert("Select Right Motor Port");

                return;
            }

            drivetrainPorts.push(port);

            usedPorts.add(drivetrainPorts[0]);
            usedPorts.add(drivetrainPorts[1]);

            const card = document.createElement("div");

            card.className = "device-card";

            card.innerHTML = `
                <strong>Drivetrain</strong><br>
                Left: Port ${drivetrainPorts[0]}<br>
                Right: Port ${drivetrainPorts[1]}
            `;

            deviceList.appendChild(card);

            drivetrainPorts = [];

        } else {

            usedPorts.add(port);

            const card = document.createElement("div");

            card.className = "device-card";

            card.innerHTML = `
                <strong>${selectedDevice}</strong><br>
                Port ${port}
            `;

            deviceList.appendChild(card);

        }

        updatePortButtons();

        portSelector.classList.add("hidden");

    });

});

function updatePortButtons() {

    document.querySelectorAll(".port-btn").forEach(button => {

        const port = Number(button.textContent);

        if (usedPorts.has(port)) {

            button.disabled = true;
            button.style.opacity = "0.4";

        } else {

            button.disabled = false;
            button.style.opacity = "1";

        }

    });

}
