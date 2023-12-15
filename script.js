document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".navbar a");
    for (const link of navLinks) {
      link.addEventListener("click", smoothScroll);
    }
  
    let scrolling = false;
    window.addEventListener("wheel", handleScroll);
  
    function smoothScroll(event) {
      event.preventDefault();
      const targetId = event.currentTarget.getAttribute("href");
      const targetElement = document.querySelector(targetId);
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  
    function handleScroll(event) {
      if (!scrolling) {
        scrolling = true;
        const sections = document.querySelectorAll("section");
        const currentSection = Array.from(sections).find(
          section => section.getBoundingClientRect().top > 0
        );
  
        if (currentSection) {
          scrolling = true;
          currentSection.scrollIntoView({ behavior: "smooth", block: "start" });
  
          setTimeout(() => {
            scrolling = false;
          }, 1000);
        }
      }
    }
  });
  