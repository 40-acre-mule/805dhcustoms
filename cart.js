let cart = [];

function addToCart(name, price) {
  cart.push({ name, price });
  updateCart();
}

function updateCart() {
  const cartItemsDiv = document.getElementById('cart-items');
  cartItemsDiv.innerHTML = '';  // Clear previous cart items
  cart.forEach(item => {
    const itemElement = document.createElement('div');
    itemElement.textContent = `${item.name} - $${item.price}`;
    cartItemsDiv.appendChild(itemElement);
  });
}

function checkout() {
  alert('Redirecting to PayPal...');
  // Implement PayPal checkout process here (using PayPal buttons or links)
}
