buyButtons.forEach(button => {
    button.addEventListener("click", function () {
        const productCard = this.closest(".product-card");
        if (!productCard) {
            console.error("Error: Product card not found!");
            return;
        }

        const productName = productCard.querySelector(".product-title")?.innerText;
        const productPrice = productCard.querySelector(".product-price")?.innerText;

        if (!productName || !productPrice) {
            console.error("Error: Product details missing!");
            return;
        }

        const cartItem = { name: productName, price: productPrice };

        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart.push(cartItem);
        localStorage.setItem("cart", JSON.stringify(cart));

        alert("🛒 Item added to cart! Go to checkout.");
    });  // ✅ Ensure this closing bracket exists
});  // ✅ Ensure this closing bracket exists
