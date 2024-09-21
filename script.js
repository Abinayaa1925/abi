let cart = [];
let totalPrice = 0;

function addToCart(item, price) {
    cart.push({ item, price });
    totalPrice += price;
    updateCartDisplay();
}

function updateCartDisplay() {
    const cartItems = document.getElementById('cartItems');
    cartItems.innerHTML = '';
    cart.forEach((cartItem, index) => {
        const li = document.createElement('li');
        li.textContent = `${cartItem.item} - $${cartItem.price}`;
        cartItems.appendChild(li);
    });
    document.getElementById('totalPrice').innerText = totalPrice;
}

function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    alert('Proceeding to checkout...');
}

function confirmOrder() {
    if (cart.length === 0) {
        alert('Your cart is empty! Please add items before confirming.');
    } else {
        alert(`Thank you for your order! Your total is $${totalPrice}.`);
        // Reset cart after confirmation
        cart = [];
        totalPrice = 0;
        updateCartDisplay();
    }
}
