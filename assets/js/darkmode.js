// assets/js/darkmode.js (or add to your existing main.js)

document.addEventListener('DOMContentLoaded', () => {
    const profilePic = document.getElementById('profile-pic');
    const body = document.body;

    // Check for saved theme preference in local storage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.setAttribute('data-theme', savedTheme);
    }

    profilePic.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default link behavior if it's a link
        
        const currentTheme = body.getAttribute('data-theme');
        let newTheme = 'dark';
        if (currentTheme === 'dark') {
            newTheme = 'light';
        }
        
        body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme); // Save preference
    });
});