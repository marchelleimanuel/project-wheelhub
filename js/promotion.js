const cardContainers = document.querySelectorAll('.card-container');

cardContainers.forEach((cardContainer) => {
    cardContainer.addEventListener('click', function(card) {
        if(card.target.classList.contains('car-card') || card.target.classList.contains('car-image')) {
            window.location.href = 'allCars.html'
        }
    });
});