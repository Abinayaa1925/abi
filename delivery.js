let cart = JSON.parse(localStorage.getItem('cart')) || [];
let totalPrice = parseFloat(localStorage.getItem('totalPrice')) || 0;
let currentShop = 'burger';

const shops = {
    burger: [
        { name: 'The Classic Burger', image: 'https://www.shutterstock.com/image-photo/classic-hamburger-stock-photo-isolated-600nw-2282033179.jpg', price: 10, rating: 4.5, restaurant: 'Burger Joint', address: '7th Cross Street, Thillai Nagar, Trichy' },
        { name: 'Cheesy Delight Burger', image: 'https://bakersway.in/cdn/shop/files/cheese-burger.png?v=1715063611', price: 12, rating: 4.0, restaurant: 'White House', address: '2nd Cross Street, Thillai Nagar, Trichy' },
        { name: 'Bacon Explosion Burger', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiVIV5XAqJjQu92r2nufS8vcTzWzPm6Ed3gQ&s', price: 13, rating: 4.8, restaurant: 'Susi Burger Shop', address: 'Opposite of Last Cinema Theatre, Trichy' },
         { name: 'Garden Fresh Veggie Burger', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl3W8YnxYTa9Rn-E8jbOq-cjBxxb8x5EVjtw&s', price: 9, rating: 4.2, userRating: 0, restaurant: 'Abi Restaurant', address: 'Opposite of Anna Stadium, Trichy' },
        { name: 'Spicy Jalapeño Burger', image: 'https://media.istockphoto.com/id/951121204/photo/bacon-cheddar-jalapeno-burger.jpg?s=612x612&w=0&k=20&c=fn2RwoohACVmIjmVDhyLo9sapIBWwuPgf7B2m5mmmPA=', price: 11, rating: 4.7, userRating: 0, restaurant: 'Ammikkal Restaurant', address: 'Pudukkottai Main Road, Trichy' }
    ],
    pizza: [
        { name: 'Margherita Masterpiece', image: 'https://media.gettyimages.com/id/184946701/photo/pizza.jpg?s=612x612&w=gi&k=20&c=4iMEO-I-_0tSb7f35CMFWN4N3Xdqf99sadSJyD-4dZk=', price: 15, rating: 4.6, restaurant: 'Pizza Palace', address: '6th Cross Street, Thillai Nagar, Trichy' },
        { name: 'Pepperoni Paradise', image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVwcGVyb25pJTIwcGl6emF8ZW58MHx8MHx8fDA%3D', price: 16, rating: 4.9, restaurant: 'White House', address: '2nd Cross Street, Thillai Nagar, Trichy' },
        { name: 'BBQ Chicken Feast', image: 'https://therecipecritic.com/wp-content/uploads/2022/04/bbqchickenpizza-1-2.jpg', price: 17, rating: 4.4, userRating: 0, restaurant: 'Ammikkal Restaurant', address: 'Pudukkottai Main Road, Trichy' },
        { name: 'Veggie Lover’s Delight', image: 'https://media.istockphoto.com/id/842082336/photo/homemade-veggie-pizza-with-mushrooms-peppers.jpg?s=612x612&w=0&k=20&c=op1vZnGjlB_c3w6Z-ohPo0wn4QveujVKZu4vTZCOWnc=', price: 14, rating: 4.3, userRating: 0, restaurant: 'Pizza Palace', address: 'Central Bus Stand, Trichy' },
        { name: 'Four Cheese Indulgence', image: 'https://media.istockphoto.com/id/1472263211/photo/delicious-pizza-formaji-with-provala-parmesan-mozzarella-gorgonzola-and-basil.jpg?s=1024x1024&w=is&k=20&c=_NnHpvkiy6JtrEsr_n9vbsbXIwMLAb3G2dEwDluLQp4=', price: 18, rating: 4.1, userRating: 0, restaurant: 'Abi Restaurant', address: 'Opposite of Anna Stadium, Trichy' }
],
    pasta: [
        { name: 'Spaghetti Bolognese Bliss', image: 'https://media.gettyimages.com/id/1360347881/photo/spaghetti-bolognese.jpg?s=612x612&w=gi&k=20&c=24ZTGO-aw1YEqlagQd8TOwPl35ugXL1bfel7OVLP1xo=', price: 12, rating: 4.5, restaurant: 'Pasta Place', address: '5th Cross Street, Thillai Nagar, Trichy' },
        { name: 'Fettuccine Alfredo Delight', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrXGIY58aI2JygW9XiQHeOvitj66bzuWNKDQ&s', price: 14, rating: 4.7, restaurant: 'White House', address: '2nd Street, Thillai Nagar, Trichy' },
        { name: 'Penne Arrabbiata Adventure', image: 'https://media.istockphoto.com/id/1132492603/photo/delicious-pasta-dish-with-fresh-basil-on-white.jpg?s=612x612&w=0&k=20&c=Dvdwn0c27prLz-VlpWnWqdjQh0_0r5akJy60LTUHvQ4=', price: 11, rating: 4.2, userRating: 0, restaurant: 'Ammikkal Restaurant', address: 'Pudukkottai Main Road, Trichy' },
        { name: 'Lasagna Layers of Love', image: 'https://t3.ftcdn.net/jpg/06/02/97/72/360_F_602977244_bN93E4Pq4RCVW88RscvPy2PdpH2bYelh.jpg', price: 15, rating: 4.6, userRating: 0, restaurant: 'Abi Restaurant', address: 'Opposite of Anna Stadium, Trichy' },
        { name: 'Seafood Pasta Sensation', image: 'https://media.istockphoto.com/id/155353180/photo/shrimp-scampi.jpg?s=612x612&w=0&k=20&c=xP9TLrgMdg-t0GFw9JkKREYciXkZjzis41hq-GOZpc4=', price: 18, rating: 4.8, userRating: 0, restaurant: 'Pasta Place', address: '' }
    ],
    noodles: [
        { name: 'Hearty Chicken Noodle Soup', image: 'https://media.istockphoto.com/id/172999861/photo/serving-of-chicken-noodle-soup-in-a-bowl.jpg?s=612x612&w=0&k=20&c=tS9XoEfMvykQ_7XCu3QUG7kKDP9Lx5_wY7DzSBT7aRo=', price: 9, rating: 4.3, restaurant: 'Noodle House', address: 'Near Abirami Hotel, Trichy' },
        { name: 'Pad Thai Paradise', image: 'https://media.istockphoto.com/id/510163478/photo/pad-thai.jpg?s=612x612&w=0&k=20&c=-tOqzOMwfhq0JZrX0mfEHE4R-vaUua5I4rcuSlSeGs0=', price: 13, rating: 4.7, restaurant: 'Noodle Palace', address: 'Near Revathi Theatre, Trichy' }    
   ]
};

function showShop(shop) {
    currentShop = shop;
    displayDishes(shops[shop]);
}

function displayDishes(dishes) {
    const shopDishes = document.getElementById('shopDishes');
    shopDishes.innerHTML = ''; // Clear previous dishes
    document.getElementById('shopTitle').textContent = `${currentShop.charAt(0).toUpperCase() + currentShop.slice(1)} Restaurant Menu`;
    
    dishes.forEach((dish, index) => {
        const dishDiv = createDishElement(dish, index);
        shopDishes.appendChild(dishDiv);
    });
}

function createDishElement(dish, index) {
    const dishDiv = document.createElement('div');
    dishDiv.className = 'dish';
    dishDiv.innerHTML = `
        <img src="${dish.image}" alt="${dish.name}" class="dish-image" />
        <h4>${dish.name} (${dish.restaurant})</h4>
        <p>Price: $${dish.price}</p>
        <p>Rating: ${'★'.repeat(Math.floor(dish.rating))}${'☆'.repeat(5 - Math.floor(dish.rating))}</p>
        <p>Address: ${dish.address}</p>
        <button class="add-to-cart" onclick="addToCart('${dish.name}', ${dish.price}, this)">Add to Cart</button>
    `;
    return dishDiv;
}

function addToCart(name, price, button) {
    cart.push({ name, price });
    totalPrice += price;
    localStorage.setItem('cart', JSON.stringify(cart));
    localStorage.setItem('totalPrice', totalPrice);
    updateCart();
    button.disabled = true; // Disable button after adding to cart
}

function updateCart() {
    const cartItems = document.getElementById('cartItems');
    cartItems.innerHTML = ''; // Clear previous items
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price}`;
        cartItems.appendChild(li);
    });
    document.getElementById('totalPrice').textContent = totalPrice.toFixed(2);
}

function checkout() {
    alert('Checkout successful! Your total is $' + totalPrice.toFixed(2));
    cart = [];
    totalPrice = 0;
    localStorage.removeItem('cart');
    localStorage.removeItem('totalPrice');
    updateCart();
}

// Load cart on page load
window.onload = function() {
    updateCart();
};
