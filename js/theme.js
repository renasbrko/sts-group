function toggleTheme() {
  document.documentElement.classList.toggle('dark');
}
  <script>
    let theme = localStorage.getItem("theme");

    if (theme === "dark") {
      document.body.classList.add("dark");
    }

    const toggle = document.getElementById("themeToggle");

    toggle.addEventListener("click", () => {
      document.body.classList.toggle("dark");

      if (document.body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
      } else {
        localStorage.setItem("theme", "light");
      }
    });
  </script>
</body>
</html>
