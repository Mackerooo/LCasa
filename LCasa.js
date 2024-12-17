
// Toggle Navbar Menu
const mobileMenu = document.getElementById('mobile-menu');
const navbarMenu = document.querySelector('.navbar-menu');

// Ensure the menu is hidden by default when switching from mobile to desktop
window.addEventListener('resize', function () {
  if (window.innerWidth > 768) {
    navbarMenu.classList.remove('active');
    mobileMenu.classList.remove('active');
  }
});

mobileMenu.addEventListener('click', () => {
  navbarMenu.classList.toggle('active');
  mobileMenu.classList.toggle('active');
});


//Reload for Home Contact animation
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
  

    const playAnimation = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate'); 
        } else {
          entry.target.classList.remove('animate'); 
        }
      });
    };
  
    //Intersection Observer
    const observer = new IntersectionObserver(playAnimation, {
      threshold: 0.5, // 
    });
  
    // Observe each section
    sections.forEach((section) => {
      observer.observe(section);
    });
  });
  



