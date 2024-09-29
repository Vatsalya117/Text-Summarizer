// js/includePartials.js

document.addEventListener('DOMContentLoaded', function() {
    // Function to load content from partial files
    function loadContent(page) {
        fetch(`partials/${page}.html`)
            .then(response => response.text())
            .then(data => {
                document.querySelector('main').innerHTML = data;
            })
            .catch(error => console.error('Error loading content:', error));
    }

    // Handle button clicks
    document.querySelectorAll('button[data-page]').forEach(button => {
        button.addEventListener('click', function() {
            const page = this.getAttribute('data-page');
            loadContent(page);
        });
    });

    // Handle navigation link clicks
    document.querySelectorAll('nav a[data-page]').forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the default link behavior
            const page = this.getAttribute('data-page');
            loadContent(page);
        });
    });
});
