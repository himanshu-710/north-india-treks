// Image Slider Functionality
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    let currentSlide = 0;
    const slideCount = slides.length;
    
    // Auto slide functionality
    let slideInterval = setInterval(nextSlide, 5000);
    
    // Function to show a specific slide
    function showSlide(n) {
        // Hide all slides
        slides.forEach(slide => {
            slide.classList.remove('active');
        });
        
        // Remove active class from all dots
        dots.forEach(dot => {
            dot.classList.remove('active');
        });
        
        // Show the current slide and activate the corresponding dot
        slides[n].classList.add('active');
        dots[n].classList.add('active');
        
        // Update current slide index
        currentSlide = n;
    }
    
    // Function to show the next slide
    function nextSlide() {
        let next = currentSlide + 1;
        if (next >= slideCount) {
            next = 0;
        }
        showSlide(next);
    }
    
    // Function to show the previous slide
    function prevSlide() {
        let prev = currentSlide - 1;
        if (prev < 0) {
            prev = slideCount - 1;
        }
        showSlide(prev);
    }
    
    // Event listeners for controls
    if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', function() {
            clearInterval(slideInterval);
            prevSlide();
            slideInterval = setInterval(nextSlide, 5000);
        });
        
        nextBtn.addEventListener('click', function() {
            clearInterval(slideInterval);
            nextSlide();
            slideInterval = setInterval(nextSlide, 5000);
        });
    }
    
    // Event listeners for dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            clearInterval(slideInterval);
            showSlide(index);
            slideInterval = setInterval(nextSlide, 5000);
        });
    });
});