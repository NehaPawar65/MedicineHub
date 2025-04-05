// Select all buy buttons
const buyButtons = document.querySelectorAll(".btn-primary");

buyButtons.forEach(button => {
    button.addEventListener("click", function () {
        // Get the nearest card (product container)
        const card = this.closest(".card") || this.closest(".product-card");
        if (!card) {
            console.error("Error: Product card not found!");
            return;
        }

        const productName = card.querySelector(".card-title")?.innerText;
        const productPriceText = card.querySelector("p strong")?.nextSibling?.nodeValue?.trim();

        if (!productName || !productPriceText) {
            console.error("Error: Product details missing!");
            return;
        }

        // Fill the modal form with values
        document.getElementById("medicineName").value = productName;
        document.getElementById("medicinePrice").value = productPriceText;

        // Show the modal
        document.getElementById("buyModal").style.display = "flex";

        // Also add the item to localStorage cart (optional)
        const cartItem = { name: productName, price: productPriceText };
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart.push(cartItem);
        localStorage.setItem("cart", JSON.stringify(cart));
    });
});

// Close modal function
function closeModal() {
    document.getElementById("buyModal").style.display = "none";
}

// Handle form submission
document.getElementById("buyForm").addEventListener("submit", function (e) {
    e.preventDefault();

    // Get entered values (you can process/store them as needed)
    const name = document.getElementById("medicineName").value;
    const price = document.getElementById("medicinePrice").value;

    // You can also get quantity and address if needed
    alert(`✅ Order for ${name} placed successfully!`);

    closeModal();
});
