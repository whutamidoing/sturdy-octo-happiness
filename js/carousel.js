document.addEventListener("DOMContentLoaded", () => {
    function setupCarousel(carouselElement) {
        const cards = carouselElement.querySelectorAll(".card");
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

        const style = document.createElement("style");
        style.textContent = `
            .card-0 { opacity: 1; left: 0%; }
            .card-1 { opacity: 1; left: 33.33%; scale: 110%; z-index: 2; }
            .card-2 { opacity: 1; left: 66.66%; }
            .card-3 { z-index: -1; opacity: 0; }
        `;
        document.head.appendChild(style);

        carouselElement.querySelector(".left").addEventListener("click", () => {
            active = (active - 1 + cards.length) % cards.length;
            updateCarousel();
        });

        carouselElement.querySelector(".right").addEventListener("click", () => {
            active = (active + 1) % cards.length;
            updateCarousel();
        });

        updateCarousel();
    }

    document.querySelectorAll(".mind").forEach(mind => {
        const carousel = mind.closest(".recommended-carousel, .trending-carousel");
        if (carousel) {
            setupCarousel(carousel);
        }
    });

    console.log("All carousels initialized");
});