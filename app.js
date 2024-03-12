const observer = new IntersectionObserver((entries, observer) => {
    console.log('entries', entries)
    entries.forEach(entry => {
        if (entry.isIntersecting) { // if the element becomes visible
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    })
});

const hiddenElements = document.querySelectorAll('.hidden');

hiddenElements.forEach(el => observer.observe(el));