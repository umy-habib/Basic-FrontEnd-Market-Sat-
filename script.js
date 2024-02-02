function toggleSidebar() {
    var sidebar = document.getElementById('sidebar');
    sidebar.style.width = (sidebar.style.width === '250px' || sidebar.style.width === '') ? '0' : '250px';
}
function closeSidebar() {
    var sidebar = document.getElementById('sidebar');
    sidebar.style.width = '0';
}


var selectedProducts = [];
var totalPrice = 0;

function addToCart(productName, price) {
    var product = {
        name: productName,
        price: price,
        quantity: 1,
        total: price * 1
    };

    selectedProducts.push(product);
    updateSelectedProducts();
}

function updateSelectedProducts() {
    var productsBody = document.querySelector('#products-table tbody');
    productsBody.innerHTML = ""; // Önceki içeriği temizle

    selectedProducts.forEach(function (product, index) {
        var row = productsBody.insertRow();
        
        var cellName = row.insertCell(0);
        cellName.textContent = product.name;

        var cellPrice = row.insertCell(1);
        var priceInput = document.createElement("input");
        priceInput.type = "number";
        priceInput.value = product.price;
        priceInput.addEventListener("input", function() {
            updatePrice(index, this.value);
        });
        cellPrice.appendChild(priceInput);

        var cellQuantity = row.insertCell(2);
        var quantityInput = document.createElement("input");
        quantityInput.type = "number";
        quantityInput.value = product.quantity;
        quantityInput.addEventListener("input", function() {
            updateQuantity(index, this.value);
        });
        cellQuantity.appendChild(quantityInput);

        var cellTotal = row.insertCell(3);
        cellTotal.textContent = product.total + " TL";

        var cellDelete = row.insertCell(4);
        var deleteButton = document.createElement("button");
        deleteButton.className = "delete-button";
        deleteButton.textContent = "Sil";
        deleteButton.onclick = function() {
            deleteProduct(index);
        };
        cellDelete.appendChild(deleteButton);
    });

    // Toplam tutarı güncelle
    updateTotalPrice();
}

function updatePrice(index, newPrice) {
    selectedProducts[index].price = parseFloat(newPrice);
    selectedProducts[index].total = selectedProducts[index].price * selectedProducts[index].quantity;

    // Tabloyu güncelle
    updateSelectedProducts();
}

function updateQuantity(index, newQuantity) {
    selectedProducts[index].quantity = parseFloat(newQuantity);
    selectedProducts[index].total = selectedProducts[index].price * selectedProducts[index].quantity;

    // Tabloyu güncelle
    updateSelectedProducts();
}

function deleteProduct(index) {
    selectedProducts.splice(index, 1);

    // Tabloyu güncelle
    updateSelectedProducts();
}

function updateTotalPrice() {
    var totalPriceElement = document.getElementById("total-price");
    totalPrice = selectedProducts.reduce(function (sum, product) {
        return sum + product.total;
    }, 0);

    totalPriceElement.textContent = "Toplam Tutar: " + totalPrice + " TL";
}

