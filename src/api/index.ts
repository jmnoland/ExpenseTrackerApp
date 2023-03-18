import { Expense } from "../models/Expense";
import { RecurringExpense } from "../models/RecurringExpense";
import { Category } from "../models/Category";
import { PaymentType } from "../models/PaymentType";
import appSettings from "../appsettings.json";

export async function getExpenses(apiKey: string): Promise<Expense[]> {
    const response = await fetch(`https://${appSettings.baseUrl}/api/expense`, {
        method: 'GET',
        mode: "cors",
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Authorization': `Basic ${apiKey}`,
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    });

    return [];
}

export async function getRecurringExpenses(apiKey: string): Promise<RecurringExpense[]> {
    return [];
}

export async function getCategories(apiKey: string): Promise<Category[]> {
    return [];
}

export async function getPaymentTypes(apiKey: string): Promise<PaymentType[]> {
    return [];
}
