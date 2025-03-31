//Task 1: Create a customer class
class Customer {
    constructor(name, email) {
        this.name = name; //Define name
        this.email = email; //Define email
        this.purchaseHistory = []; //Define purchase history
    }

    addPurchase(amount) {  //adding a purchase to the purchase history
        this.purchaseHistory.push(amount);
    }

        getTotalSpent() { //returning total amount spent by the customer
        return this.purchaseHistory.reduce((total, amount) => total + amount, 0);
      }
    }
    // Example usage:
const customer1 = new Customer('Alice Johnson', 'alice.johnson@example.com');

customer1.addPurchase(120.50);
customer1.addPurchase(85.75);
customer1.addPurchase(40.00);

console.log(`Total spent by ${customer1.name}: $${customer1.getTotalSpent()}`); //logging in the console waht the custome name and total spent by the customer
