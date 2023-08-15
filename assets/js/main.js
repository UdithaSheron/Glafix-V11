const SERVICE_BOXES = document.querySelectorAll('.service-card__box');
let currentServiceBG = null;

/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 

const header = document.querySelector('.l-header');
let prevScrollPos = window.pageYOffset;

window.addEventListener('scroll', () => {
    const currentScrollPos = window.pageYOffset;

    if (prevScrollPos > currentScrollPos) {
        // User is scrolling up, show the header
        header.classList.remove('nav-hidden');
    } else {
        // User is scrolling down, hide the header
        header.classList.add('nav-hidden');
    }

    prevScrollPos = currentScrollPos;
});

   //This is Code For Backend Email Send In via Email JS
// Initialize EmailJS with your EmailJS API Key
emailjs.init("2DAqhS1GLn8wTWG-d");

// JavaScript code for handling form submission and sending the email
document.getElementById("contactForm").onsubmit = function (event) {
    event.preventDefault();

    // Get form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const countryCode = document.getElementById("countryCode").value;
    const phone = countryCode + document.getElementById("phone").value;
    const message = document.getElementById("message").value;

    // Send email using EmailJS API with your API Key to your email address
    emailjs.send("service_fph1c9j", "template_9tx8ref", { to_name: name, from_name: "Your Name", message: message, to_email: email, phone_number: phone })
        .then(function (response) {
            console.log("User email sent successfully!", response);
            document.getElementById("contactForm").reset();
            showSuccessMessage();

            // Send auto-reply email to the user
            emailjs.send("service_fph1c9j", "template_jf7akvq", { to_name: name, reply_to: email, phone_number: phone })
                .then(function (autoReplyResponse) {
                    console.log("Auto-reply email sent successfully!", autoReplyResponse);
                })
                .catch(function (autoReplyError) {
                    console.error("Failed to send auto-reply email:", autoReplyError);
                });
        })
        .catch(function (error) {
            console.error("Failed to send user email:", error);
            showErrorMessage();
        });
};

// Function to display success message
function showSuccessMessage() {
    const successMessage = document.querySelector(".success-message");
    successMessage.style.display = "block";
}

// Function to display error message
function showErrorMessage() {
    const errorMessage = document.querySelector(".error-message");
    errorMessage.style.display = "block";
}

function navigateToContact() {
    window.location.href = "contact.html";
}


    document.addEventListener('DOMContentLoaded', function () {
        const navToggle = document.getElementById('nav-toggle');
        const navMenu = document.getElementById('nav-menu');

        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('show');
        });
    });






    