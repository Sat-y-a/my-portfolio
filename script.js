// Smooth scroll for nav links
document.querySelectorAll("nav ul li a").forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      const section = document.getElementById(targetId);
      if (section) {
        window.scrollTo({
          top: section.offsetTop - 20,
          behavior: "smooth"
        });
      }
    });
  });
  
  // Contact form validation
  const contactForm = document.querySelector(".contact-form");
  
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const fullName = this.fullname.value.trim();
      const email = this.email.value.trim();
      const message = this.message.value.trim();
  
      if (!fullName || !email || !message) {
        alert("Please fill out all required fields (Name, Email, and Message).");
        return;
      }
  
      // For now, just show a success message
      alert("Thank you! Your message has been submitted.");
      this.reset(); // Clear the form
    });
  }

  
  // Smooth scroll for nav links
document.querySelectorAll("nav ul li a").forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      const section = document.getElementById(targetId);
      if (section) {
        window.scrollTo({
          top: section.offsetTop - 20,
          behavior: "smooth"
        });
      }
    });
  });
  
  // Form submit handler
  document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    // Simulate successful send
    document.getElementById("confirmation").style.display = "block";
    // Optionally clear fields
    this.reset();
  });

  


  document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    document.getElementById("confirmation").style.display = "block";
    this.reset();
  });
  