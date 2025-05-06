// Select menu icon, navbar, and search icon
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let searchIcon = document.querySelector('#search-icon');
let searchBox = document.querySelector('.search-box');

// Toggle navbar on menu icon click
menuIcon.onclick = () => {
    navbar.classList.toggle('active');
    searchBox.classList.remove('active');
};

// Toggle search box on search icon click
searchIcon.onclick = () => {
    searchBox.classList.toggle('active');
    navbar.classList.remove('active');
};

// Remove active class from search box and navbar on scroll
window.onscroll = () => {
    navbar.classList.remove('active');
    searchBox.classList.remove('active');
};

// Open a new window for the "View More" button
document.querySelector('.view-more-btn').onclick = function() {
    window.open('view-more.html', '_blank');
};

// Ensure all "Read More" and "Buy Now" links open in a new window/tab
document.querySelectorAll('.blog-btn, .btn').forEach(link => {
    link.onclick = function(event) {
        if (link.classList.contains('view-more-btn')) {
            return; // Already handled
        }
        window.open(link.getAttribute('href'), '_blank');
        event.preventDefault();
    }
});