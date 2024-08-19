// src/models/CheckingAccountTransaction.ts

export interface CheckingTransaction {
    transactionDate: Date;            // The date when the transaction was made
    postedDate: Date | null;          // The date when the transaction was posted/cleared; might be null if not cleared yet
    amount: number;                   // The amount of the transaction, negative for debits, positive for credits
    description: string;              // Description or note associated with the transaction
    transactionType: string;          // The type of transaction (e.g., "deposit", "withdrawal", "fee")
    checkNumber?: string;             // Optional: The check number if the transaction was a check
    balance: number;                  // Account balance after the transaction is posted
    category?: string;                // Optional: User-defined category for the transaction
    merchant?: string;                // Optional: The name of the merchant or payee
  }
  