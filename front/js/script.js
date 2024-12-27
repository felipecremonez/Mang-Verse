let cart = [];
let total = 0.0;

function addToCart(product, price) {
    cart.push({ product, price });
    total += price;
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cartItems');
    const totalElement = document.getElementById('total');

    cartItems.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.product} - $${item.price.toFixed(2)}`;
        cartItems.appendChild(li);
    });

    totalElement.textContent = `Total: $${total.toFixed(2)}`;
}

//  Funções para abrir e fechar o modal
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('card-container');
    const openModalBtn = document.getElementById('register');
    const closeModalBtn = document.querySelector('.close-button');

    // Function to open the modal
    function openModal() {
        modal.style.display = 'block';
    }

    // Function to close the modal
    function closeModal() {
        modal.style.display = 'none';
    }

    // Event listener to open the modal
    openModalBtn.addEventListener('click', openModal);

    // Event listener to close the modal
    closeModalBtn.addEventListener('click', closeModal);

    // Close the modal when clicking outside of the modal content
    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            closeModal();
        }
    });
});
