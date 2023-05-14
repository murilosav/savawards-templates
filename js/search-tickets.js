const searchTicketsContainer = document.querySelectorAll('.search-tickets-container');
const closeSearchBtn = document.getElementById('close-search-tickets');
// Overlay - Blur
var overlayBlurEffect = document.getElementById('overlay-blur-effect');

function toggleSearchTickets() {
    document.body.style.overflow = 'hidden'
    searchTicketsContainer.forEach(element => {
        element.style.top = '33vh';
    });

    overlayBlurEffect.style.opacity = '1'
    overlayBlurEffect.style.visibility = 'visible'
}

closeSearchBtn.addEventListener("click", ()=> {
    document.body.style.overflow = 'overlay'
    searchTicketsContainer.forEach(element => {
        element.style.top = '-300px';
    });

    overlayBlurEffect.style.opacity = '0'
    overlayBlurEffect.style.visibility = 'hidden'
});

overlayBlurEffect.addEventListener("click", ()=> {
    document.body.style.overflow = 'overlay'
    searchTicketsContainer.forEach(element => {
        element.style.top = '-300px';
    });

    overlayBlurEffect.style.opacity = '0'
    overlayBlurEffect.style.visibility = 'hidden'
});