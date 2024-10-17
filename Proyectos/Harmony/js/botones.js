const testimonials = document.querySelectorAll(".testimonial");
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");
let currentTestimonial = 0;

function updateTestimonials() {
  testimonials.forEach((testimonial, index) => {
    const distanceFromCenter = index - currentTestimonial;
    const translateX = distanceFromCenter * 100;
    const scale = distanceFromCenter === 0 ? 1 : 0.9;
    const opacity = distanceFromCenter === 0 ? 1 : 0.5;

    testimonial.style.transform = `scale(${scale}) translateX(${translateX}%)`;
    testimonial.style.opacity = opacity;
  });
}

prevButton.addEventListener("click", () => {
  currentTestimonial =
    (currentTestimonial - 1 + testimonials.length) % testimonials.length;
  updateTestimonials();
});

nextButton.addEventListener("click", () => {
  currentTestimonial = (currentTestimonial + 1) % testimonials.length;
  updateTestimonials();
});

updateTestimonials();
