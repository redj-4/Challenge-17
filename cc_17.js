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

//Task 2: Create a salesRep class 
class SalesRep { //creating a class for salesRep
    constructor(name) { 
        this.name = name; 
        this.clients = []; 
    }

    addClient(customer) {
        this.clients.push(customer); //Adding a customer to the clients array 
    }
    getClientTotal(name) {
        const client = this.clients.find(c => c.name === name);
        return client ? client.getTotalSpent() : 0;
    } //Find client by name
}

//logging the salesRep clients 
const customer2 = new Customer('Bryce Waters', 'BryceW@gmail.com');
customer2.addPurchase(120.50);
customer2.addPurchase(85.75);

const salesRep1 = new SalesRep('Carl Ramirez');
salesRep1.addClient(customer2);
salesRep1.getClientTotal('Bryce Waters');