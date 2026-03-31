// Hire Me button alert
const hireBtn = document.getElementById("hire-btn");

if (hireBtn) {
  hireBtn.addEventListener("click", function () {
    alert("Thank you for visiting my portfolio. I would be happy to connect with you.");
  });
}

// Show / Hide extra text
const toggleBtn = document.getElementById("toggle-btn");
const moreText = document.getElementById("more-text");

if (toggleBtn && moreText) {
  toggleBtn.addEventListener("click", function () {
    if (moreText.style.display === "block") {
      moreText.style.display = "none";
      toggleBtn.textContent = "Show More";
    } else {
      moreText.style.display = "block";
      toggleBtn.textContent = "Show Less";
    }
  });
}

// Contact form validation
const contactForm = document.getElementById("contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    const name = document.getElementById("form_name").value.trim();
    const email = document.getElementById("form_email").value.trim();

    if (name === "" || email === "") {
      event.preventDefault();
      alert("Please fill in your name and email before submitting.");
      return;
    }

    alert("Your message has been submitted successfully.");
  });
}