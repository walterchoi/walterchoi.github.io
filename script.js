document.getElementById("darkModeToggle").addEventListener("click", function() {
    var currentTheme = document.documentElement.getAttribute("data-bs-theme");
    var newTheme = currentTheme === "light" ? "dark" : "light";
    
    document.documentElement.setAttribute("data-bs-theme", newTheme);

    // Toggle footer class for light mode (if applicable)
    var footer = document.querySelector('.footer');
    if (newTheme === "light") {
        footer.style.backgroundColor = "#f8f9fa"; // Light mode background
        footer.style.color = "#343a40"; // Light mode text color
    } else {
        footer.style.backgroundColor = "#343a40"; // Dark mode background
        footer.style.color = "#f8f9fa"; // Dark mode text color
    }

    this.textContent = newTheme === "light" ? "Dark Mode" : "Light Mode";
});