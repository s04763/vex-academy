
const deviceList = document.getElementById("deviceList");
const addDeviceBtn = document.getElementById("addDeviceBtn");

addDeviceBtn.addEventListener("click", () => {

    const deviceType = prompt(
        "Device Type:\n\nDrivetrain\nMotor\nDistance Sensor\nOptical Sensor\nTouch LED\nBumper"
    );

    if (!deviceType) return;

    let ports;

    if (deviceType.toLowerCase() === "drivetrain") {

        const leftPort = prompt("Left Motor Port (1-12)");
        const rightPort = prompt("Right Motor Port (1-12)");

        ports = `Left: Port ${leftPort}, Right: Port ${rightPort}`;

    } else {

        const port = prompt("Port Number (1-12)");
        ports = `Port ${port}`;

    }

    const deviceCard = document.createElement("div");

    deviceCard.className = "device-card";

    deviceCard.innerHTML = `
        <strong>${deviceType}</strong><br>
        ${ports}
    `;

    deviceList.appendChild(deviceCard);

});
