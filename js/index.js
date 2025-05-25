// Navigation functions (keep your existing ones)
const navClose = () => {
  const closeNav = document.getElementById("close");
  if (closeNav) {
    closeNav.style.display = "none";
  }
};

const navOpen = () => {
  const closeNav = document.getElementById("close");
  if (closeNav) {
    closeNav.style.display = "block";
  }
};

// const about = document.querySelector(".about");
// let aboutMarginTop = -64;
// const increaseAbout = () => {
//   if (window.onresize) {
//     about.style.marginTop = (aboutMarginTop + "px") * 3;
//   }
// };

// increaseAbout();

// // Simple function to adjust heights based on viewport
// function adjustHeights() {
//   // Get the elements
//   const welcomingText = document.querySelector(".welcoming-text");
//   const aboutSection = document.querySelector(".about");
//   const carousel = document.querySelector(".carousel");
//   const carouselImages = document.querySelectorAll(".carousel-item img");

//   // Log what we found
//   console.log("Elements found:", {
//     welcomingText: !!welcomingText,
//     aboutSection: !!aboutSection,
//     carousel: !!carousel,
//     images: carouselImages.length,
//   });

//   if (!welcomingText || !aboutSection) {
//     console.log("Required elements not found");
//     return;
//   }

//   // Get viewport dimensions
//   const vw = window.innerWidth;
//   const vh = window.innerHeight;

//   console.log("Viewport:", { width: vw, height: vh });

//   // Calculate new height (70% of viewport height)
//   const newHeight = Math.floor(vh * 0.7);

//   // Apply the height to welcoming section
//   welcomingText.style.height = newHeight + "px";

//   // Apply same height to carousel
//   if (carousel) {
//     carousel.style.height = newHeight + "px";
//   }

//   // Adjust carousel images
//   carouselImages.forEach((img) => {
//     img.style.height = newHeight + "px";
//     img.style.objectFit = "cover";
//   });

//   // Adjust about section margin (keep the overlap effect)
//   const marginTop = -64; // Keep your original overlap
//   aboutSection.style.marginTop = marginTop + "px";

//   console.log("Applied styles:", {
//     welcomingHeight: newHeight + "px",
//     aboutMargin: marginTop + "px",
//   });
// }

// // Function to test if our changes are working
// function testChanges() {
//   const welcomingText = document.querySelector(".welcoming-text");
//   if (welcomingText) {
//     // Test with a very obvious change
//     welcomingText.style.backgroundColor = "red";
//     welcomingText.style.height = "300px";
//     console.log(
//       "Test applied - you should see a red background and 300px height"
//     );

//     // Remove test after 3 seconds
//     setTimeout(() => {
//       welcomingText.style.backgroundColor = "";
//       adjustHeights(); // Apply our real changes
//     }, 3000);
//   }
// }

// // Initialize everything
// function init() {
//   console.log("Initializing...");

//   // Run our height adjustments
//   adjustHeights();

//   // Add resize listener
//   let resizeTimeout;
//   window.addEventListener("resize", () => {
//     clearTimeout(resizeTimeout);
//     resizeTimeout = setTimeout(() => {
//       console.log("Window resized, adjusting heights...");
//       adjustHeights();
//     }, 100);
//   });

//   console.log("Initialization complete");
// }

// // Wait for DOM to be ready
// if (document.readyState === "loading") {
//   document.addEventListener("DOMContentLoaded", init);
// } else {
//   init();
// }

// // Make functions available globally for testing
// window.adjustHeights = adjustHeights;
// window.testChanges = testChanges;

// // Debug function to check current computed styles
// window.checkStyles = function () {
//   const welcomingText = document.querySelector(".welcoming-text");
//   const aboutSection = document.querySelector(".about");

//   if (welcomingText) {
//     const computed = getComputedStyle(welcomingText);
//     console.log("Welcoming text styles:", {
//       height: computed.height,
//       computedHeight: welcomingText.offsetHeight + "px",
//       setHeight: welcomingText.style.height,
//     });
//   }

//   if (aboutSection) {
//     const computed = getComputedStyle(aboutSection);
//     console.log("About section styles:", {
//       marginTop: computed.marginTop,
//       setMarginTop: aboutSection.style.marginTop,
//     });
//   }
// };
