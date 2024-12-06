// Function to change the quantity of an item
function changeQuantity(change) {
    // Get the quantity input element
    const quantityInput = document.getElementById('quantity');

    let currentQuantity = parseInt(quantityInput.value, 10);

    // Update the quantity based on the change value
    currentQuantity += change;

    // Ensure the quantity is not less than 1
    if (currentQuantity < 1) {
        currentQuantity = 1;
    }

    // Set the new quantity value to the input field
    quantityInput.value = currentQuantity;
}

document.addEventListener("DOMContentLoaded", function() {
    // Fetch the header HTML and insert it into the header-placeholder element
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-placeholder').innerHTML = data;
        });

    // Fetch the footer HTML and insert it into the footer-placeholder element
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-placeholder').innerHTML = data;
        });
});