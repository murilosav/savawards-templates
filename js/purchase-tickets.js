const purchaseTicketsContainer = document.querySelectorAll('.purchase-tickets-container');
const closePurchaseBtn = document.getElementById('close-purchase-tickets');
// Overlay - Blur
var overlayBlurEffect = document.getElementById('overlay-blur-effect');

function checkQuantity() {
    var quantidadeInput = parseInt(document.getElementById("quantityValue").value);
    var mensagemErro = document.getElementById("quantity-error");

    if (quantidadeInput <= 0 || isNaN(quantidadeInput)) {
        mensagemErro.style.display = "block";
    } else {
        mensagemErro.style.display = "none";
        togglePurchaseTickets();
    }
}

function togglePurchaseTickets() {
    document.body.style.overflow = 'hidden';
    purchaseTicketsContainer.forEach(element => {
        element.style.top = '23vh';
    });

    overlayBlurEffect.style.opacity = '1';
    overlayBlurEffect.style.visibility = 'visible';
}

closePurchaseBtn.addEventListener("click", ()=> {
    document.body.style.overflow = 'overlay'
    purchaseTicketsContainer.forEach(element => {
        element.style.top = '-700px';
    });

    overlayBlurEffect.style.opacity = '0'
    overlayBlurEffect.style.visibility = 'hidden'
});

overlayBlurEffect.addEventListener("click", ()=> {
    document.body.style.overflow = 'overlay'
    purchaseTicketsContainer.forEach(element => {
        element.style.top = '-700px';
    });

    overlayBlurEffect.style.opacity = '0'
    overlayBlurEffect.style.visibility = 'hidden'
});