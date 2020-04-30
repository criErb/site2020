
function menuToggle() {
    var menuPanel = document.getElementById("menu-panel");
    var menuIconFirst = document.querySelector(".c-menu__toggle span:first-child");
    var menuIconSecond = document.querySelector(".c-menu__toggle span:nth-child(2)");
    var menuIconThird = document.querySelector(".c-menu__toggle span:nth-child(3)");

    if (menuPanel.style.display === "none") {
    menuPanel.style.display = "block";
    menuIconFirst.style.transform = "rotate(45deg)";
    menuIconFirst.style.top = "12px";
    menuIconSecond.style.display = "none";
    menuIconThird.style.transform = "rotate(-45deg)";
    menuIconThird.style.top = "12px";
} else {
    menuPanel.style.display = "none";
    menuIconFirst.style.transform = "rotate(0)";
    menuIconFirst.style.top = "0";
    menuIconSecond.style.display = "block";
    menuIconThird.style.transform = "rotate(0)";
    menuIconThird.style.top = "16px";
    }
}