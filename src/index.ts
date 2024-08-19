// /src/index.ts

import { CheckingTransaction } from './models/checkingTransaction';
// import { SavingsTransaction } from './models/SavingsAccountTransaction';
// import { CreditCardTransaction } from './models/CreditCardTransaction';
// import { InvestmentTransaction } from './models/InvestmentTransaction';
// import { Transaction } from './models/Transaction';
// import { Account } from './models/Account';
// import { CheckingAccount } from './models/CheckingAccount';
// import { SavingsAccount } from './models/SavingsAccount';
// import { CreditCardAccount } from './models/CreditCardAccount';
// import { InvestmentAccount } from './models/InvestmentAccount';
// import { User } from './models/User';
// import { InterestRateDetail } from './models/InterestRate';
// import { InterestRateType } from './enums/InterestRateType';

const transaction: CheckingTransaction = {
    transactionDate: new Date('2024-08-18'),
    postedDate: new Date('2024-08-19'),
    amount: -150.00,
    description: "Grocery Store Purchase",
    transactionType: "Withdrawal",
    balance: 1350.00,
    category: "Groceries",
    merchant: "SuperMart",
};

console.log(transaction);
