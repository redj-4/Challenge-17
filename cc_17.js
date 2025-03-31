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


//Task 3: Create a VIPCustomer Class (extends Customer)
const loyaltyBonus =  .1 //Creating loyalty bonus for VIP customers

//Creating a VIPCustomer class that extends Customer
class VIPCustomer extends Customer {
    constructor(name, email, vipLevel) {
        super(name, email);
        this.vipLevel = vipLevel;
    } 

    getTotalSpent() {     //Returning total spent with 10% loyalty bonus added
        const total = super.getTotalSpent();
        const bonus = total * loyaltyBonus;
        return total + bonus;
    }
}

//logging a new VIP customer
const vipCustomer1 = new VIPCustomer ("Bordo", "bordo@gmail.com", "Platinum")
vipCustomer1.addPurchase(250);
vipCustomer1.addPurchase(500);
console.log(`VIP Customer: ${vipCustomer1.name} (${vipCustomer1.vipLevel})`);
console.log(`Total Spent with Bonus: $${vipCustomer1.getTotalSpent().toFixed(2)}`);


//Task 4: Building a client report system 
const customer3 = new Customer ('Carly', 'carlyj.1@gmail.com' )
customer3.addPurchase(100)

const customer4 = new Customer('Joshua', 'joshua2@gmail.com')
customer4.addPurchase(200)

const customer5 = new VIPCustomer ('Yousef', 'yousefzori@gmail.com', 'Gold')
customer5.addPurchase(300)

const customers = [customer1, customer2,customer3, customer4, customer5] //all new customers created

//Calculating total revenue from all customers using .reduce
const totalRev = customers.reduce((total, customer) => total + customer.getTotalSpent(), 0)

 //Finding customers and VIPcustomers who spent $500+ using .filter
 const highSpend = customers.filter(customer => customer.getTotalSpent() > 500)

 //Creating array of customer names and total spent using .map
 const customerSummary = customers.map(customer => `${customer.name}: $${customer.getTotalSpent()}`)

 //Logging the total revenue, high spenders, and customer summary
    console.log(`Total Revenue: $${totalRev.toFixed(2)}`);
    console.log(`High Spenders:`);
    highSpend.forEach(customer => console.log(`${customer.name}: $${customer.getTotalSpent()}`));
    console.log(`Customer Summary:`);
    customerSummary.forEach(summary => console.log(summary));