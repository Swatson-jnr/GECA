// Navigation functions (keep your existing ones)
// const navClose = () => {
//   const closeNav = document.getElementById("close");
//   if (closeNav) {
//     closeNav.style.display = "none";
//   }
// };

// const navOpen = () => {
//   const closeNav = document.getElementById("close");
//   if (closeNav) {
//     closeNav.style.display = "block";
//   }
// };
// const handleOutsideClick = (event) => {
//   const closeNav = document.getElementById("close");
//   if (closeNav && !closeNav.contains(event.target)) {
//     navClose();
//   }
// };

const navClose = () => {
  const closeNav = document.getElementById("close");
  if (closeNav) {
    closeNav.style.display = "none";
    // Remove outside click listener when closed
    document.removeEventListener("click", handleOutsideClick);
  }
};

const navOpen = () => {
  const closeNav = document.getElementById("close");
  if (closeNav) {
    closeNav.style.display = "block";
    // Add outside click listener
    setTimeout(() => {
      document.addEventListener("click", handleOutsideClick);
    }, 0); // Delay to avoid immediate trigger on open click
  }
};

const handleOutsideClick = (event) => {
  const closeNav = document.getElementById("close");
  if (closeNav && !closeNav.contains(event.target)) {
    navClose();
  }
};

const testimonials = document.querySelectorAll(".test");
let current = 0;

function showNextTestimonial() {
  // Remove 'animate' from all first
  testimonials.forEach((test) => {
    test.classList.remove("animate");
  });

  // Add 'animate' to the current testimonial
  testimonials[current].classList.add("animate");

  // After animation ends, go to next
  current = (current + 1) % testimonials.length;
}

// First run
showNextTestimonial();

// Run every 12 seconds
setInterval(showNextTestimonial, 12000);

const gecaRgion = document.getElementById("geca");
const regionDropdown = document.getElementById("regions");

gecaRgion.addEventListener("click", function () {
  event.preventDefault();
  regionDropdown.classList.toggle("hidden");
});
