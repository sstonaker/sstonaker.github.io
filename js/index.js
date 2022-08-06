const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav-list__link')

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})

// let socialIcon = document.querySelectorAll('.social-list__link i');
// socialIcon.forEach(icon => {
//     icon.addEventListener('mouseover', () => {
//         icon.classList.add('fa-spin');
//     })
// })

// socialIcon.forEach(icon => {
//     icon.addEventListener('mouseout', () => {
//         icon.classList.remove('fa-spin');
//     })
// })
