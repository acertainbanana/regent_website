// dropdown.js - Mobile dropdown toggle
document.addEventListener('DOMContentLoaded', function() {
  function initMobileDropdown() {
    const isMobile = window.innerWidth <= 768;
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
    
    dropdownToggles.forEach(toggle => {
      toggle.removeEventListener('click', toggleClickHandler);
      
      if (isMobile) {
        toggle.addEventListener('click', toggleClickHandler);
      }
    });
  }
  
  function toggleClickHandler(e) {
    const dropdown = this.parentElement;
    const isActive = dropdown.classList.contains('active');
    
    document.querySelectorAll('.dropdown').forEach(d => {
      if (d !== dropdown) {
        d.classList.remove('active');
      }
    });
    
    if (isActive) {
      dropdown.classList.remove('active');
    } else {
      dropdown.classList.add('active');
    }
    
    e.preventDefault();
  }
  
  initMobileDropdown();
  
  let resizeTimer;
  window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(initMobileDropdown, 250);
  });
  
  document.addEventListener('click', function(e) {
    if (window.innerWidth <= 768) {
      if (!e.target.closest('.dropdown')) {
        document.querySelectorAll('.dropdown').forEach(d => {
          d.classList.remove('active');
        });
      }
    }
  });
});