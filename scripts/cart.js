let cart = JSON.parse(localStorage.getItem('cart')) || []; // Load cart from localStorage

function displayCart() {
    const cartList = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    cartList.innerHTML = '';

    let total = 0;
    cart.forEach((item, index) => {
        total += parseFloat(item.price.slice(1));

        const cartItem = document.createElement('li');
        cartItem.textContent = `${item.name} - ${item.price}`;

        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.onclick = () => {
            cart.splice(index, 1);
            localStorage.setItem('cart', JSON.stringify(cart));
            displayCart();
        };

        cartItem.appendChild(removeBtn);
        cartList.appendChild(cartItem);
    });

    cartTotal.textContent = `Total: $${total.toFixed(2)}`;
}

// Checkout functionality
document.getElementById('checkoutButton').onclick = () => {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }

    alert('Thank you for your purchase!');
    cart = []; // Clear the cart
    localStorage.setItem('cart', JSON.stringify(cart)); // Clear cart in localStorage
    displayCart();
};

// Display the cart when the page loads
document.addEventListener('DOMContentLoaded', displayCart);
