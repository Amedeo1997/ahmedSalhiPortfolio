document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projects = document.querySelectorAll('.project');
  
    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        const filterValue = button.getAttribute('data-filter');
  
        projects.forEach(project => {
          if (filterValue === 'all' || project.classList.contains(filterValue)) {
            project.style.display = 'block';
          } else {
            project.style.display = 'none';
          }
        });
      });
    });
  });
  
  window.addEventListener("scroll", function() {
    const header = document.querySelector("header");
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
  
  