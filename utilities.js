window.onload = function() {
    ScrollReveal().reveal('.site',{delay: 1000});
}


document.addEventListener("DOMContentLoaded", function() {
    let images = document.querySelectorAll(".fade-in");
    
    //# This function was generated using ChatGPT (OpenAI), February 23, 2025

    function checkScroll() {
        images.forEach(img => {
            let rect = img.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                img.style.opacity = 1;
            }
        });
    }
    
    images.forEach(img => {
        img.style.opacity = 0;
        img.style.transition = "opacity 1.5s ease-in-out";
    });

    window.addEventListener("scroll", checkScroll);
    checkScroll();
});