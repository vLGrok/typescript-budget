// Define a record (interface) for CardTransaction
interface CardTransaction {
    date: Date;           // The date of the transaction
    amount: number;       // The amount of the transaction
    merchant: string;     // The merchant of the transaction
    category: string;     // The category of the transaction
    rate: number;         // The interest rate of the transaction
    note: string;         // A note for the transaction
  }
  
  // Example of creating a CardTransaction record
  const transaction: CardTransaction = {
    date: new Date('2024-08-18'),
    amount: 1000,
    merchant: "Example Merchant",
    category: "Utilities",
    rate: 0.15,
    note: "Monthly utility bill payment"
  };
  
  // You can then work with this record as needed
  console.log(transaction);
  