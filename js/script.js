const underlineActive = document.querySelectorAll('nav ul li a');
const nameRefresh = document.querySelector('nav ul li a[href="#refresh"]');

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