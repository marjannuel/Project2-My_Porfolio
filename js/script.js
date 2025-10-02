const underlineActive = document.querySelectorAll('nav ul li a');
const sections = document.querySelectorAll('section');
const nameRefresh = document.querySelector('nav ul li a[href="#refresh"]');

const textElements = document.querySelectorAll('.intro h1, .intro h2, .intro p');

underlineActive.forEach(link => {
  link.addEventListener('click', function() {
    underlineActive.forEach(l => l.classList.remove('active'));
    this.classList.add('active');

    if (this === nameRefresh) {
      underlineActive.forEach(l => l.classList.remove('active'));
      location.reload();
    }
  });
});

window.addEventListener('scroll', () => {
  let currentSection = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 200; // adjust for header height
    if (window.scrollY >= sectionTop) {
      currentSection = section.getAttribute('id');
    }
  });

   underlineActive.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + currentSection) {
      link.classList.add('active');
    }
  });
});

function loopTextAnimation() {
  textElements.forEach(el => {
    el.style.animation = 'none'; // Remove animation
    el.offsetHeight; // Force reflow
    el.style.animation = ''; // Re-add animation (uses CSS)
  });
}


setInterval(loopTextAnimation, 31000);