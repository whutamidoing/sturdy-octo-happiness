document.addEventListener("DOMContentLoaded", () => {
    // Carousel
        const cards = document.querySelectorAll(".card");
        let active = 0;
    
        function updateCarousel() {
            cards.forEach((card, index) => {
                card.classList.remove("card-0", "card-1", "card-2", "card-3");
    
                if (index === active) card.classList.add("card-1");
                else if (index === (active + 1) % cards.length) card.classList.add("card-2");
                else if (index === (active - 1 + cards.length) % cards.length) card.classList.add("card-0");
                else card.classList.add("card-3");
            });
        }
    
        function nextSlide() {
            active = (active + 1) % cards.length;
            updateCarousel();
        }
    
        function prevSlide() {
            active = (active - 1 + cards.length) % cards.length;
            updateCarousel();
        }
    
        document.querySelector(".left").addEventListener("click", prevSlide);
        document.querySelector(".right").addEventListener("click", nextSlide);
    
        updateCarousel();
        console.log("script loaded");
    });