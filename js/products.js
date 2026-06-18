const products = [
{
    id: 1,
    name: "Gaming Headset",
    price: 499000,
    image: "assets/images/products/headphone.jpg"
},
{
    id: 2,
    name: "RGB Keyboard",
    price: 699000,
    image: "assets/images/products/keyboard.jpg"
},
{
    id: 3,
    name: "Gaming Mouse",
    price: 299000,
    image: "assets/images/products/mouse.jpg"
},
{
    id: 4,
    name: "Monitor 24 Inch",
    price: 2999000,
    image: "assets/images/products/monitor.jpg"
}
];

const grid =
document.getElementById("productsGrid");

function renderProducts(list) {

    grid.innerHTML = "";

    list.forEach(product => {

        grid.innerHTML += `
        <div class="product-card">

            <img
                src="${product.image}"
                alt="${product.name}"
            >

            <div class="product-info">

                <h3>${product.name}</h3>

                <p class="product-price">
                    ${product.price.toLocaleString()}₫
                </p>

                <button
                    class="add-cart-btn"
                    onclick="addToCart(${product.id})"
                >
                    Add to Cart
                </button>

            </div>

        </div>
        `;
    });
}

function addToCart(id) {

    let cart =
    JSON.parse(localStorage.getItem("cart"))
    || [];

    let existing =
    cart.find(item => item.id === id);

    if (existing) {

        existing.quantity++;

    } else {

        cart.push({
            id: id,
            quantity: 1
        });

    }

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    alert("Added to cart!");
}

document
.getElementById("searchInput")
.addEventListener("input", e => {

    const keyword =
    e.target.value.toLowerCase();

    const filtered =
    products.filter(product =>
        product.name
        .toLowerCase()
        .includes(keyword)
    );

    renderProducts(filtered);
});

renderProducts(products);