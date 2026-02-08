function toggleTheme() {
  document.documentElement.classList.toggle('dark');
}

const toggleBtn = document.getElementById('theme-toggle'); 
const body = document.body;
const icon = toggleBtn.querySelector('i'); 

const currentTheme = localStorage.getItem('theme');

if (currentTheme === 'dark') {
    body.classList.add('dark-mode');
}

toggleBtn.addEventListener('click', function() {
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark'); 
    } else {
        localStorage.setItem('theme', 'light'); 
    }
});
