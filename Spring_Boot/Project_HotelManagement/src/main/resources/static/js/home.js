 function showLogin() {
        document.getElementById('btn-signin').classList.add('d-none');
        document.getElementById('btn-logout').classList.remove('d-none');
    }
    const data = [
    { name: "Product 1", price: "$19.99", image: "bad.jpg" },
    { name: "Product 2", price: "$29.99", image: "apple.jpg" },
    { name: "Product 3", price: "$39.99", image: "product3.jpg" },
];

const container = document.getElementById("create-span");

data.forEach(item => {
    const span = document.createElement("span");
    span.classList.add("border", "border-secondary", "rounded-3");
    span.style.width = "200px";
    span.style.height = "300px";
    const nameElement = document.createElement("h3");
    nameElement.textContent = item.name;
    const priceElement = document.createElement("p");
    priceElement.textContent = item.price;
    const imageElement = document.createElement("img");
    imageElement.src = item.image;
    imageElement.alt = item.name;

    // Thêm các phần tử vào span
    span.appendChild(imageElement);
    span.appendChild(nameElement);
    span.appendChild(priceElement);

    // Thêm phần tử span vào container
    container.appendChild(span);
});