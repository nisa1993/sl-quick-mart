const products = [
    { id: 1, name: "Product 1", price: 100 },
    { id: 2, name: "Product 2", price: 150 },
    { id: 3, name: "Product 3", price: 200 }
];

const cart = [];

function displayProducts() {
    const productList = document.querySelector('.product-list');
    if (productList) {
        productList.innerHTML = '';
        products.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('product');
            productDiv.innerHTML = `
                <h3>${product.name}</h3>
                <p>Price: $${product.price}</p>
                <button onclick="addToCart(${product.id})">Add to Cart</button>
            `;
            productList.appendChild(productDiv);
        });
    }
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    alert(`${product.name} added to cart!`);
}

document.addEventListener('DOMContentLoaded', () => {
    displayProducts();
    startSlideshow();
});

function startSlideshow() {
    let slideIndex = 0;
    const slides = ["slide1.jpg", "slide2.jpg", "slide3.jpg"];
    const slideshowContainer = document.querySelector(".slideshow-container");
    if (!slideshowContainer) return;
    
    const imgElement = document.createElement("img");
    imgElement.classList.add("slideshow");
    slideshowContainer.appendChild(imgElement);
    
    function showSlide() {
        imgElement.src = slides[slideIndex];
        slideIndex = (slideIndex + 1) % slides.length;
        setTimeout(showSlide, 3000);
    }
    showSlide();
}