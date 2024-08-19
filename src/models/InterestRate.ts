// src/models/InterestRate.ts
import { InterestRateType } from '../enums/InterestRateType';

// Define an interface for the interest rate period
interface InterestRatePeriod {
    startDate: Date;
    endDate: Date | null; // null indicates no specific end date (e.g., standard rates)
  }
  
  // Define an interface for the interest rate details
  interface InterestRateDetail {
    type: InterestRateType;
    rate: number; // e.g., 0.15 for 15%
    period: InterestRatePeriod;
  }

// Example of an active interest rate record
// const activeInterestRates: InterestRateDetail[] = [
//   {
//     type: InterestRateType.NormalPurchase,
//     rate: 0.15, // 15% APR for purchases
//     period: { startDate: new Date('2024-01-01'), endDate: null },
//   },
//   {
//     type: InterestRateType.BalanceTransferPromo,
//     rate: 0.05, // 5% promotional APR for balance transfers
//     period: { startDate: new Date('2024-08-01'), endDate: new Date('2025-08-01') },
//   },
//   {
//     type: InterestRateType.BalanceTransferPostPromo,
//     rate: 0.20, // 20% APR after the promo period ends
//     period: { startDate: new Date('2025-08-02'), endDate: null },
//   },
//   {
//     type: InterestRateType.CashAdvance,
//     rate: 0.25, // 25% APR for cash advances
//     period: { startDate: new Date('2024-01-01'), endDate: null },
//   },
// ];
