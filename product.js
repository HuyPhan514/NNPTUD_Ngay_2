//Câu 1: Constructor Product
function Product(id, name, price, quantity, category, isAvailable) {
  this.id = id;
  this.name = name;
  this.price = price;
  this.quantity = quantity;
  this.category = category;
  this.isAvailable = isAvailable;
}

//Câu 2: Mảng products
const products = [
  new Product(1, "iPhone 15 Pro", 35000000, 5, "Phone", true),
  new Product(2, "Samsung S24", 28000000, 0, "Phone", true),
  new Product(3, "MacBook Pro", 42000000, 3, "Laptop", true),
  new Product(4, "Dell XPS", 32000000, 2, "Laptop", false),
  new Product(5, "AirPods Pro", 6500000, 10, "Accessories", true),
  new Product(6, "Magic Mouse", 2500000, 0, "Accessories", true),
];

//Câu 3
console.log("Câu 3:");
console.log(products.map(p => ({ name: p.name, price: p.price })));

//Câu 4
console.log("Câu 4:");
console.log(products.filter(p => p.quantity > 0));

//Câu 5
console.log("Câu 5:");
console.log(products.some(p => p.price > 30000000));

//Câu 6
console.log("Câu 6:");
console.log(
  products
    .filter(p => p.category === "Accessories")
    .every(p => p.isAvailable)
);

//Câu 7
console.log("Câu 7:");
console.log(
  products.reduce((total, p) => total + p.price * p.quantity, 0)
);

//Câu 8
console.log("Câu 8:");
for (const p of products) {
  console.log(
    `${p.name} - ${p.category} - ${p.isAvailable ? "Đang bán" : "Ngừng bán"}`
  );
}

//Câu 9
console.log("Câu 9:");
for (const key in products[0]) {
  console.log(key + ": " + products[0][key]);
}

//Câu 10
console.log("Câu 10:");
console.log(
  products
    .filter(p => p.isAvailable && p.quantity > 0)
    .map(p => p.name)
);
