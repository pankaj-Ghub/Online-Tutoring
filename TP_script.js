let allProducts = [];

async function fetchProducts() {
    try {
        const response = await fetch('/api/products');  // Fetch products from the backend
        const products = await response.json();         // Convert response to JSON
        allProducts = products;                         // Store products in a global variable
        displayProducts(products);                      // Display products
    } catch (error) {
        console.error("Error fetching products:", error);
    }
}

// Function to display products
function displayProducts(products) {
    const productsContainer = document.getElementById('products');
    productsContainer.innerHTML = '';  // Clear the container

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.innerHTML = `<h2>${product.name}</h2><p>Price: $${product.price}</p>`;
        productsContainer.appendChild(productDiv);
    });
}

// Function to search products
function searchProducts() {
    const query = document.getElementById('searchBar').value.toLowerCase();
    const filteredProducts = allProducts.filter(product =>
        product.name.toLowerCase().includes(query)
    );
    displayProducts(filteredProducts);
}

fetchProducts();  // Call the function to fetch and display products
