const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");

// Check whether the user has previously selected a theme
const savedTheme = localStorage.getItem("theme");

// Default to dark mode
if (savedTheme === "light") {
    document.body.classList.remove("dark-theme");
    themeIcon.textContent = "☾";
    themeToggle.setAttribute("aria-label", "Switch to dark theme");
} else {
    document.body.classList.add("dark-theme");
    themeIcon.textContent = "☀";
    themeToggle.setAttribute("aria-label", "Switch to light theme");
}

// Toggle theme
themeToggle.addEventListener("click", () => {

    const isDark = document.body.classList.toggle("dark-theme");

    if (isDark) {
        localStorage.setItem("theme", "dark");
        themeIcon.textContent = "☀";
        themeToggle.setAttribute("aria-label", "Switch to light theme");
    } else {
        localStorage.setItem("theme", "light");
        themeIcon.textContent = "☾";
        themeToggle.setAttribute("aria-label", "Switch to dark theme");
    }

});
