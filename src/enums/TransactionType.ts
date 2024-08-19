// src/enums/TransactionType.ts
export enum TransactionType {
    NormalCharge = "NormalCharge",             // Most common type of transaction
    CardPayment = "CardPayment",               // Payments made to reduce the balance
    InterestCharge = "InterestCharge",         // Interest charges for carrying a balance
    Fee = "Fee",                               // Various fees such as late fees, annual fees
    CashAdvance = "CashAdvance",               // Cash withdrawal using the credit card
    BalanceTransfer = "BalanceTransfer",       // Transfer of balance from one card to another
    ForeignTransaction = "ForeignTransaction", // Transactions made in foreign currencies
    Refund = "Refund",                         // Refunds of previous charges
    Reversal = "Reversal",                     // Reversal of incorrect or fraudulent charges
    Chargeback = "Chargeback",                 // Disputed transactions reversed by the issuer
    Installment = "Installment",               // Payments as part of an installment plan
    PreAuthorization = "PreAuthorization",     // Holds placed on the card for future transactions
    PendingTransaction = "PendingTransaction", // Authorized but not yet posted transactions
    CashBackReward = "CashBackReward",         // Cashback rewards credited to the account
    RewardRedemption = "RewardRedemption",     // Points or rewards redeemed by the cardholder
    Credit = "Credit",                         // Promotional or goodwill credits applied
}


// Description Map
export const TransactionTypeDescriptions = new Map<TransactionType, string>([
    [TransactionType.NormalCharge, "Most common type of transaction"],
    [TransactionType.CardPayment, "Payments made to reduce the balance"],
    [TransactionType.InterestCharge, "Interest charges for carrying a balance"],
    [TransactionType.Fee, "Various fees such as late fees, annual fees"],
    [TransactionType.CashAdvance, "Cash withdrawal using the credit card"],
    [TransactionType.BalanceTransfer, "Transfer of balance from one card to another"],
    [TransactionType.ForeignTransaction, "Transactions made in foreign currencies"],
    [TransactionType.Refund, "Refunds of previous charges"],
    [TransactionType.Reversal, "Reversal of incorrect or fraudulent charges"],
    [TransactionType.Chargeback, "Disputed transactions reversed by the issuer"],
    [TransactionType.Installment, "Payments as part of an installment plan"],
    [TransactionType.PreAuthorization, "Holds placed on the card for future transactions"],
    [TransactionType.PendingTransaction, "Authorized but not yet posted transactions"],
    [TransactionType.CashBackReward, "Cashback rewards credited to the account"],
    [TransactionType.RewardRedemption, "Points or rewards redeemed by the cardholder"],
    [TransactionType.Credit, "Promotional or goodwill credits applied"],
  ]);
  