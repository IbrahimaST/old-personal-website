document.addEventListener('DOMContentLoaded', function () {
    const experienceButtons = document.getElementsByClassName("Projects");

    for (let i = 0; i < experienceButtons.length; i++) {
        experienceButtons[i].addEventListener('click', function () {
            location.href = "portfolio.html";
        });
    }
});