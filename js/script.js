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
        
        // Show loader with theme-colored text
        const loaderWrapper = document.querySelector('.loader-wrapper');
        
        // Reset loader state first
        loaderWrapper.classList.remove('fade-out');
        loaderWrapper.style.display = 'flex';
        loaderWrapper.style.flexDirection = 'column';
        loaderWrapper.style.opacity = '1';
        
        // Create and add loader text
        const loaderText = document.createElement('div');
        loaderText.textContent = 'Applying Theme...';
        
        // Set text color based on theme
        switch(theme) {
            case 'purple':
                loaderText.style.color = '#9c27b0';
                break;
            case 'blue':
                loaderText.style.color = '#2196f3';
                break;
            case 'green':
                loaderText.style.color = '#4CAF50';
                break;
            case 'orange':
                loaderText.style.color = '#ff9800';
                break;
        }
        
        loaderText.style.fontSize = '1.5rem';
        loaderText.style.marginTop = '20px';
        loaderText.style.fontWeight = 'bold';
        loaderWrapper.appendChild(loaderText);
        loaderWrapper.style.display = 'flex';
        loaderWrapper.style.flexDirection = 'column';
        
        const tempImage = new Image();
        let newImageSrc = '';
        
        switch(theme) {
            case 'purple':
                newImageSrc = 'https://haseeb-giit.github.io/portfolio/img1.JPG';
                break;
            case 'blue':
                newImageSrc = 'https://haseeb-giit.github.io/portfolio/img2.JPG';
                break;
            case 'green':
                newImageSrc = 'https://haseeb-giit.github.io/portfolio/img3.JPG';
                break;
            case 'orange':
                newImageSrc = 'https://haseeb-giit.github.io/portfolio/img4.jpg';
                break;
        }
        
        tempImage.onload = function() {
            document.documentElement.setAttribute('data-theme', theme);
            profileImage.src = newImageSrc;
            localStorage.setItem('preferred-theme', theme);
            localStorage.setItem('profile-image', newImageSrc);
            
            // Hide loader and remove the text
            setTimeout(() => {
                document.querySelector('.loader-wrapper').classList.add('fade-out');
                setTimeout(() => {
                    document.querySelector('.loader-wrapper').style.display = 'none';
                    document.querySelector('.loader-wrapper').classList.remove('fade-out');
                    loaderText.remove(); // Remove the text element
                }, 500);
            }, 300);
        };
        
        tempImage.src = newImageSrc;
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
