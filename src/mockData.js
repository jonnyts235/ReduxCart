class Product {
  constructor(id, name, price, description) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.description = description;
  }
}

export default [
  new Product(1, "Shirt ", 9.99, "Nicely Folded"),
  new Product(2, "Sweater ", 19.99, "It's a fleece sweater"),
  new Product(3, "Hat ", 15.99, "Bucket Hat"),
  new Product(4, "TV ", 149.99, "On Sale"),
  new Product(5, "Shoes ", 29.99, "Buy one Get one"),
  new Product(6, "Jordans ", 169.99, "Lookin Fresh"),
  new Product(7, "iPhone ", 829.99, "New Technology"),
  new Product(8, "MacBook ", 2749.99, "Touch Bar")
];
