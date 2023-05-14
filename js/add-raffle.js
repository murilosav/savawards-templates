// Elements
const addOneTicketBtn = document.getElementById('add-one-ticket');
const addFiveTicketBtn = document.getElementById('add-five-ticket');
const addTenTicketBtn = document.getElementById('add-ten-ticket');
const addHundredTicketBtn = document.getElementById('add-hundred-ticket');
const decreaseValueBtn = document.getElementById('decreaseValue');
const increaseValueBtn = document.getElementById('increaseValue');
const quantityValueInput = document.getElementById('quantityValue');
const totalValueDiv = document.getElementById('total-value');

// Add +1 Ticket
addOneTicketBtn.addEventListener('click', () => {
  incrementQuantity(1);
});

// Add +5 Ticket
addFiveTicketBtn.addEventListener('click', () => {
  incrementQuantity(5);
});

// Add +10 Ticket
addTenTicketBtn.addEventListener('click', () => {
  incrementQuantity(10);
});

// Add +100 Ticket
addHundredTicketBtn.addEventListener('click', () => {
  incrementQuantity(100);
});

// quantity decrease button
decreaseValueBtn.addEventListener('click', () => {
  decrementQuantity();
});

// quantity increase button
increaseValueBtn.addEventListener('click', () => {
  incrementQuantity(1);
});

// Only allow numbers in quantity field
quantityValueInput.addEventListener('input', () => {
  const value = quantityValueInput.value;
  quantityValueInput.value = value.replace(/[^0-9]/g, '');
  updateTotalValue();
});

// increment quantity
function incrementQuantity(value) {
  let currentQuantity = parseInt(quantityValueInput.value);
  if (isNaN(currentQuantity)) {
    currentQuantity = 0;
  }
  currentQuantity += value;
  quantityValueInput.value = currentQuantity;
  updateTotalValue();
}

// decrement quantity
function decrementQuantity() {
  let currentQuantity = parseInt(quantityValueInput.value);
  if (currentQuantity > 1) {
    currentQuantity--;
    quantityValueInput.value = currentQuantity;
    updateTotalValue();
  }
}

// Update the total amount
function updateTotalValue() {
  let quantity = parseInt(quantityValueInput.value);
  if (isNaN(quantity)) {
    quantity = 1;
  }
  const total = (ticketValue * quantity).toFixed(2);
  const formattedTotal = parseFloat(total).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  totalValueDiv.textContent = formattedTotal;
}


// Initialize with the total value based on the default value of the quantity field
updateTotalValue();