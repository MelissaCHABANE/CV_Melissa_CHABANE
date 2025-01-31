document.addEventListener("DOMContentLoaded", function () {
    let modeButton = document.createElement("button");
    modeButton.textContent = "Mode Sombre";
    document.body.appendChild(modeButton);

    modeButton.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
    });
});
