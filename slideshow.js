document.addEventListener("DOMContentLoaded", function () {
  let currentSlide =0; 
  showSlides();
  function showSlides() {
    const slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[currentSlide].style.display='block';
    // slides[currentSlide].style.animation='fade 1.5s ease-in-out infinite;'
    currentSlide++;
    if(currentSlide>slides.length-1){
        currentSlide=0;
    }
    setTimeout(showSlides,2000);
  }
});
