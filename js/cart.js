const products = [
{
    id: 1,
    name: "Gaming Headset",
    price: 499000
},
{
    id: 2,
    name: "RGB Keyboard",
    price: 699000
},
{
    id: 3,
    name: "Gaming Mouse",
    price: 299000
},
{
    id: 4,
    name: "Monitor 24 Inch",
    price: 2999000
}
];

const cart =
JSON.parse(localStorage.getItem("cart"))
|| [];

const cartItems =
document.getElementById("cartItems");

if (cart.length === 0) {

    cartItems.innerHTML = `
        <h2>🛒 Your cart is empty</h2>
    `;

    document.getElementById(
        "totalPrice"
    ).textContent = "0₫";

} else {

    let total = 0;

    cart.forEach(item => {

        const product =
        products.find(
            p => p.id === item.id
        );

        if (!product) return;

        total +=
        product.price *
        item.quantity;

        cartItems.innerHTML += `
        <div class="cart-item">

            <div>

                <strong>
                    ${product.name}
                </strong>

                <br>

                ${product.price.toLocaleString()}₫

            </div>

            <div>

                <button
                onclick="decrease(${product.id})">
                    ➖
                </button>

                ${item.quantity}

                <button
                onclick="increase(${product.id})">
                    ➕
                </button>

                <button
                onclick="removeItem(${product.id})">
                    🗑
                </button>

            </div>

        </div>
        `;
    });

    document.getElementById(
        "totalPrice"
    ).textContent =
    total.toLocaleString() + "₫";
}

function saveCart() {

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );
}

function increase(id) {

    const item =
    cart.find(
        item => item.id === id
    );

    if (!item) return;

    item.quantity++;

    saveCart();

    location.reload();
}

function decrease(id) {

    const item =
    cart.find(
        item => item.id === id
    );

    if (!item) return;

    item.quantity--;

    if (item.quantity <= 0) {

        cart.splice(
            cart.indexOf(item),
            1
        );
    }

    saveCart();

    location.reload();
}

function removeItem(id) {

    const newCart =
    cart.filter(
        item => item.id !== id
    );

    localStorage.setItem(
        "cart",
        JSON.stringify(newCart)
    );

    location.reload();
}