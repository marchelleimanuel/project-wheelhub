const hamburger = document.querySelector('.hamburger');
const dropdownItems = document.querySelector('.dropdown-items');


hamburger.addEventListener('click', function() {
    this.classList.toggle('active');
    dropdownItems.classList.toggle('active');
});


Array.from(dropdownItems).forEach((links) => {
    links.addEventListener('click', function() {
        hamburger.classList.remove('active');
        dropdownItems.classList.remove('active');
    });
});








