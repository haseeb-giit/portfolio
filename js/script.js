let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Backend Developer', 'Python Developer', 'Web Designer', 'DevOps Engineer'],
    typeSpeed: 80,
    backSpeed: 80,
    backDelay: 1200,
    loop: true,
});

// Add smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add scroll reveal
window.addEventListener('scroll', reveal);

function reveal() {
    const reveals = document.querySelectorAll('.services-box, .testimonial-item, .about-content');

    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('active');
        }
    });
}

// Trigger animation for home section elements immediately on page load
// Add at the beginning of your script.js
// Wait for all images to load before hiding the loader
window.addEventListener('load', () => {
    const images = document.querySelectorAll('img');
    let loadedImages = 0;

    function imageLoaded() {
        loadedImages++;
        if (loadedImages === images.length) {
            // All images have loaded, hide the loader
            document.querySelector('.loader-wrapper').classList.add('fade-out');
            setTimeout(() => {
                document.querySelector('.loader-wrapper').style.display = 'none';
            }, 500);
        }
    }

    // Check each image
    images.forEach(img => {
        if (img.complete) {
            imageLoaded();
        } else {
            img.addEventListener('load', imageLoaded);
            img.addEventListener('error', imageLoaded); // Handle error cases too
        }
    });
});

// Theme switching functionality
const themeButtons = document.querySelectorAll('.theme-btn');
const profileImage = document.getElementById('profile-image');

themeButtons.forEach(button => {
    button.addEventListener('click', () => {
        const theme = button.getAttribute('data-theme');
        document.documentElement.setAttribute('data-theme', theme);
        
        // Change image based on theme with error handling
        switch(theme) {
            case 'purple':
                profileImage.src = 'Files/img1.g';
                break;
            case 'blue':
                profileImage.src = 'Files/img2.jpg';
                break;
            case 'green':
                profileImage.src = 'Files/img3.jpg';
                break;
            case 'orange':
                profileImage.src = 'Files/img4.jpg';
                break;
        }
        
        // Add error handling for image loading
        profileImage.onerror = function() {
            profileImage.src = './Files/img1.jpg'; // Fallback to default image
        };
        
        // Save theme preference
        localStorage.setItem('preferred-theme', theme);
        localStorage.setItem('profile-image', profileImage.src);
    });
});

// Load saved theme preference and image
window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('preferred-theme');
    const savedImage = localStorage.getItem('profile-image');
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
        if (savedImage) {
            profileImage.src = savedImage;
        }
    }
});
