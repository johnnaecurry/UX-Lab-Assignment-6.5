window.onload = function() {
const scrollReveal = ScrollReveal();

scrollReveal.reveal('.site', { delay: 1000 });

scrollReveal.reveal('.fade-in-1', {
    origin: 'top',
    distance: '50px',
    duration: 1000,
    delay: 200,
    reset: true
});

scrollReveal.reveal('.fade-in-2', {
    origin: 'left',
    distance: '50px',
    duration: 1000,
    delay: 300,
    reset: true
});

scrollReveal.reveal('.fade-in-3', {
    origin: 'right',
    distance: '50px',
    duration: 1000,
    delay: 400,
    reset: true
});

scrollReveal.reveal('.fade-in-4', {
    origin: 'left',
    distance: '50px',
    duration: 1000,
    delay: 500,
    reset: true
});

scrollReveal.reveal('.fade-in-5', {
    origin: 'right',
    distance: '50px',
    duration: 1000,
    delay: 600,
    reset: true
});

scrollReveal.reveal('.fade-in-6', {
    origin: 'bottom',
    distance: '50px',
    duration: 1000,
    delay: 700,
    reset: true
});
}