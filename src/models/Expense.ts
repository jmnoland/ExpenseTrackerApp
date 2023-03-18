export class Expense {
    expenseId: string;
    name: string;
    amount: number;
    categoryId: string;
    paymentTypeId: string;
    date: Date;
    recurringExpenseId: string;

    constructor(expenseId: string,
                name: string,
                amount: number,
                categoryId: string,
                paymentTypeId: string,
                date: Date,
                recurringExpenseId: string) {
        this.expenseId = expenseId;
        this.name = name;
        this.amount = amount;
        this.categoryId = categoryId;
        this.paymentTypeId = paymentTypeId;
        this.date = date;
        this.recurringExpenseId = recurringExpenseId;
    }
}
