const faqs = document.querySelectorAll('.facu');

faqs.forEach(facu => {
    facu.addEventListener('click', () => {
        facu.classList.toggle('active');
    })
})