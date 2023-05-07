const searchTicketsContainer = document.querySelectorAll('.search-tickets-container');
const closeBtn = document.getElementById('close-search-tickets');
const overlayBlurEffect = document.getElementById('overlay-blur-effect');

function toggleSearchTickets() {
    searchTicketsContainer.forEach(element => {
        element.style.top = '65px';
    });

    overlayBlurEffect.style.display = 'block'
}

closeBtn.addEventListener("click", ()=> {
    searchTicketsContainer.forEach(element => {
        element.style.top = '-250px';
    });

    overlayBlurEffect.style.display = 'none'
});

overlayBlurEffect.addEventListener("click", ()=> {
    searchTicketsContainer.forEach(element => {
        element.style.top = '-250px';
    });

    overlayBlurEffect.style.display = 'none'
});