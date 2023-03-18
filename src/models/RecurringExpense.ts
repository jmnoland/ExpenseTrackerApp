export class RecurringExpense {
    recurringExpenseId: string;
    categoryId: string;
    paymentTypeId: string;
    name: string;
    startDate: Date;
    endDate: Date | null;
    frequency: string;
    amount: number;
    lastExpenseDate: Date | null;

    constructor(recurringExpenseId: string,
                categoryId: string,
                paymentTypeId: string,
                name: string,
                startDate: Date,
                endDate: Date | null,
                frequency: string,
                amount: number,
                lastExpenseDate: Date | null) {
        this.recurringExpenseId = recurringExpenseId;
        this.categoryId = categoryId;
        this.paymentTypeId = paymentTypeId;
        this.name = name;
        this.startDate = startDate;
        this.endDate = endDate;
        this.frequency = frequency;
        this.amount = amount;
        this.lastExpenseDate = lastExpenseDate;
    }
}
