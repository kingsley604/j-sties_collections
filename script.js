// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.innerHTML = navMenu.classList.contains('active') 
            ? '<i class="fas fa-times"></i>' 
            : '<i class="fas fa-bars"></i>';
    });
}

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        if (hamburger) {
            hamburger.innerHTML = '<i class="fas fa-bars"></i>';
        }
    });
});

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.backgroundColor = 'rgba(26, 26, 26, 0.98)';
        header.style.padding = '15px 0';
    } else {
        header.style.backgroundColor = 'rgba(26, 26, 26, 0.95)';
        header.style.padding = '20px 0';
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// WhatsApp Form Submission
const whatsappForm = document.getElementById('whatsapp-form');
if (whatsappForm) {
    whatsappForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const location = document.getElementById('location').value;
        const item = document.getElementById('item').value;
        const message = document.getElementById('message').value;
        
        // Create the WhatsApp message
        let whatsappMessage = Hello! I want to place an order from Slytrice.%0A%0A;

        if (message) {
            whatsappMessage += *Additional Details:* ${message};
        }
        
        // Your WhatsApp number
        const phoneNumber = '233598010501';
        const phoneNumber = '233538958181';
        
        // Open WhatsApp with the pre-filled message
        window.open(https://wa.me/${phoneNumber}?text=${whatsappMessage}, '_blank');
    });
}

// Clickable contact methods
document.addEventListener('DOMContentLoaded', function() {
    const phoneNumber = '233598010501'; // Your phone number
    const phoneNumber = '233538958181'; // Your phone number
    
    // WhatsApp click
    const whatsappElement = document.querySelector('.fa-whatsapp');
    if (whatsappElement && whatsappElement.closest('.contact-method')) {
        whatsappElement.closest('.contact-method').addEventListener('click', function() {
            window.open(https://wa.me/${phoneNumber}, '_blank');
        });
    }
    
    // Phone call click
    const phoneElement = document.querySelector('.fa-phone');
    if (phoneElement && phoneElement.closest('.contact-method')) {
        phoneElement.closest('.contact-method').addEventListener('click', function() {
            window.location.href = tel:${phoneNumber};
        });
    }
    
    // SMS click
    const smsElement = document.querySelector('.fa-sms');
    if (smsElement && smsElement.closest('.contact-method')) {
        smsElement.closest('.contact-method').addEventListener('click', function() {
            window.location.href = sms:${phoneNumber};
        });
    }
    
    // Also make phone numbers in footer clickable
    const footerPhone = document.querySelector('.fa-phone').closest('li');
    if (footerPhone) {
        footerPhone.style.cursor = 'pointer';
        footerPhone.addEventListener('click', function() {
            window.location.href = tel:${phoneNumber};
        });
    }
});

// Product Gallery Functionality
function initializeProductGallery() {
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
        card.addEventListener('click', function() {
            const productName = this.querySelector('h3').textContent;
            const productPrice = this.querySelector('.price').textContent;
            const productImage = this.querySelector('img').src;
            
            // You can implement a modal or redirect to product detail page here
            console.log(Product: ${productName}, Price: ${productPrice});
        });
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeProductGallery();
    
    // Add loading animation to product cards
    const productCards = document.querySelectorAll('.category-card, .product-card');
    productCards.forEach((card, index) => {
        card.style.animationDelay = ${index * 0.1}s;
        card.classList.add('fade-in');
    });
});

// Add CSS for fade-in animation
const style = document.createElement('style');
style.textContent = `
    .fade-in {
        animation: fadeInUp 0.8s ease both;
    }
    
    .contact-method {
        cursor: pointer;
        transition: all 0.3s ease;
    }

    .contact-method:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 25px rgba(0,0,0,0.1);
        background: #f8f4e9 !important;
    }
    
    .contact-info li {
        cursor: pointer;
        transition: all 0.3s ease;
    }
    
    .contact-info li:hover {
        color: var(--primary-color);
        transform: translateX(5px);
    }
`;
document.head.appendChild(style);

  // Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.innerHTML = navMenu.classList.contains('active') 
            ? '<i class="fas fa-times"></i>' 
            : '<i class="fas fa-bars"></i>';
    });
}

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        if (hamburger) {
            hamburger.innerHTML = '<i class="fas fa-bars"></i>';
        }
    });
});