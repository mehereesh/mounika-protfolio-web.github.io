var typed = new Typed(".text", {
    strings: ["UIUX DESIGNER" ,"WEB DEVELOPER"],
    typeSpeed:100,
    backSpeed:100,
    loop:true
});


const toTop = document.querySelector(".top");
window.addEventListener("scroll",() =>{
    if (window.pageYOffset > 100){
        toTop.classList.add("active");
    }
    else{
        toTop.classList.remove("active");
    }
})

document.addEventListener("DOMContentLoaded", () => {
    const revealElements = document.querySelectorAll(".reveal");

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;

        revealElements.forEach((el) => {
            const elementTop = el.getBoundingClientRect().top;

            if (elementTop < windowHeight - 100) {
                el.classList.add("active");
            } else {
                el.classList.remove("active");
            }
        });
    };

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // Trigger on page load
});


document.addEventListener("DOMContentLoaded", () => {
    const slider = document.querySelector(".slider");
    const toolsCajas = slider.innerHTML; // Get original content
    slider.innerHTML += toolsCajas; // Duplicate content for seamless loop
});

ScrollReveal().reveal('.education', {
    origin: 'left',
    distance: '100px',
    duration: 1200
});

ScrollReveal().reveal('.experience', {
    origin: 'right',
    distance: '100px',
    duration: 1200
});

ScrollReveal().reveal('.case-studies', {
    origin: 'top',
    distance: '100px',
    duration: 1200
});

