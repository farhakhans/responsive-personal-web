function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}
// script.js

let cart = [];
let cartCount = 0;

function addToCart(productName, productPrice) {
    // Create a cart item object
    const cartItem = {
        name: productName,
        price: productPrice,
        quantity: 1
    };

    // Check if the item is already in the cart
    const existingItem = cart.find(item => item.name === productName);
    if (existingItem) {
        existingItem.quantity += 1; // If the item exists, increase quantity
    } else {
        cart.push(cartItem); // Otherwise, add the new item to the cart
    }

    cartCount += 1; // Increment the cart item count
    updateCartDisplay(); // Update the cart display in the header and modal
}

function updateCartDisplay() {
    // Update the cart count in the header
    document.getElementById("cart-count").textContent = cartCount;

    // Update the cart total price
    const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    document.getElementById("cart-total").textContent = totalPrice.toFixed(2);

    // Update the cart item list in the modal
    const cartItemsList = document.getElementById("cart-items-list");
    cartItemsList.innerHTML = ''; // Clear the current list

    cart.forEach(item => {
        const listItem = document.createElement("li");
        listItem.textContent = `${item.name} - $${item.price} x ${item.quantity}`;
        cartItemsList.appendChild(listItem);
    });
}

function toggleCart() {
    const cartModal = document.getElementById("cart-modal");
    cartModal.style.display = cartModal.style.display === "flex" ? "none" : "flex";
}

function closeCart() {
    document.getElementById("cart-modal").style.display = "none";
}
