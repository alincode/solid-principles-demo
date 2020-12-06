class Order {
  constructor(items) {
    this.items = items;
    this.amount = this.calculateAmount();
  }
  calculateAmount() {
    let amount = 0;
    for (let item of this.items) {
      amount += item.price * item.quantity;
    }
    return amount;
  }
  emailReceipt() {
    console.log("Thank you for your business! Your total was $" + this.amount);
  }
  orderFinish() {
    // more...
    this.emailReceipt();
  }
}

let items = [
  { price: 100, quantity: 3 },
  { price: 150, quantity: 1 },
];

const order = new Order(items);
console.log(order.orderFinish());
