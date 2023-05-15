const seeTicketsBtn = document.getElementById('see-tickets');
const ticketNumbers = document.getElementById('ticket-numbers');

seeTicketsBtn.addEventListener('click', ()=> {
    ticketNumbers.classList.toggle('visible');
})