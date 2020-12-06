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
  orderFinish() {
    // more...
    Email.sendEmail(this.amount);
  }
}

class Email {
  static sendEmail(amount) {
    console.log("Thank you for your business! Your total was $" + amount);
  }
}

let items = [
  { price: 100, quantity: 3 },
  { price: 150, quantity: 1 },
];

new Order(items).orderFinish();
