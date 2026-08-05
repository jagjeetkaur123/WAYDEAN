// Slideshow
let slides = document.querySelectorAll(".slide");
let currentIndex = 0;

function showNextSlide() {
  slides[currentIndex].classList.remove("active");
  currentIndex = (currentIndex + 1) % slides.length;
  slides[currentIndex].classList.add("active");
}

setInterval(showNextSlide, 4000); // change every 4 seconds

// Contact Form
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  document.getElementById("formResponse").textContent =
    `Thank you, ${name}! Your enquiry has been received. We'll reply to ${email} soon.`;

  this.reset();
});