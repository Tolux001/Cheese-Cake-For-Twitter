const nav = document.querySelector('.desktop');
const mobileNav =document.querySelector('.mobile--nav')
const sectionOne = document.getElementById('section--one');
const sectionTwo = document.getElementById('section--two');
const sectionThree = document.getElementById('section--three');
const navToggle = document.querySelector('.nav--toggle');


// Nav scroll background Effect 
window.addEventListener('scroll', ()=> {
    if(window.scrollY > 50){
        nav.classList.add('scrolled');
    }else {
        nav.classList.remove('scrolled');
    }
})
window.addEventListener('scroll', ()=> {
    if(window.scrollY > 50){
        mobileNav.classList.add('scrolled');
    }else {
        mobileNav.classList.remove('scrolled');
    }
})

window.addEventListener('scroll', ()=> {
    if(window.scrollY > 220){
        sectionOne.classList.add('active1');
    }else {
        sectionOne.classList.remove('active1');
    }
})
window.addEventListener('scroll', ()=> {
    if(window.scrollY > 800){
        sectionTwo.classList.add('active2');
    }else {
        sectionTwo.classList.remove('active2');
    }
})
window.addEventListener('scroll', ()=> {
    if(window.scrollY > 1500){
        sectionThree.classList.add('active3');
    }else {
        sectionThree.classList.remove('active3');
    }
})

// NavBar functions
navToggle.addEventListener('click', ()=> {
    // navToggle.style.transform = "rotate(90deg)"
})