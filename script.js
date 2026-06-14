const addDeviceBtn = document.getElementById("addDeviceBtn");
const deviceSelector = document.getElementById("deviceSelector");

addDeviceBtn.addEventListener("click", () => {
    deviceSelector.classList.toggle("hidden");
});
