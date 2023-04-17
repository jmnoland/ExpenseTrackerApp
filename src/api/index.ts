import { Expense } from "../models/Expense";
import { RecurringExpense } from "../models/RecurringExpense";
import { Category } from "../models/Category";
import { PaymentType } from "../models/PaymentType";
import { GetResponse } from "../models/GetResponse";
import appSettings from "../appsettings.json";

export async function getExpenses(apiKey: string, clientId: string): Promise<Expense[]> {
    const response = await fetch(`${appSettings.baseUrl}/api/expense`, {
        method: 'GET',
        mode: "cors",
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Authorization': `Basic ${apiKey}`,
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'x-client-id': clientId,
        }
    });
    const body = await response.json() as GetResponse<Expense[]>;
    return body.responseObject.map(expense => {
        return { ...expense, date: new Date(expense.date) } as Expense
    });
}

export async function createExpense(apiKey: string, clientId: string, body: {}): Promise<Expense> {
    const response = await fetch(`${appSettings.baseUrl}/api/expense`, {
        method: 'POST',
        mode: "cors",
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Authorization': `Basic ${apiKey}`,
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'x-client-id': clientId,
        },
        body: JSON.stringify(body),
    });
    return await response.json() as Expense;
}

export async function getRecurringExpenses(apiKey: string, clientId: string): Promise<RecurringExpense[]> {
    const response = await fetch(`${appSettings.baseUrl}/api/recurringexpense`, {
        method: 'GET',
        mode: "cors",
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Authorization': `Basic ${apiKey}`,
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'x-client-id': clientId,
        }
    });
    const body = await response.json() as GetResponse<RecurringExpense[]>;
    return body.responseObject.map(recurringExpense => {
        return {
            ...recurringExpense,
            startDate: new Date(recurringExpense.startDate),
            endDate: recurringExpense.endDate !== null ? new Date(recurringExpense.endDate) : null,
            lastExpenseDate: recurringExpense.lastExpenseDate !== null ? new Date(recurringExpense.lastExpenseDate) : null,
        } as RecurringExpense
    });
}

export async function getCategories(apiKey: string, clientId: string): Promise<Category[]> {
    const response = await fetch(`${appSettings.baseUrl}/api/category`, {
        method: 'GET',
        mode: "cors",
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Authorization': `Basic ${apiKey}`,
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'x-client-id': clientId,
        }
    });
    const body = await response.json() as GetResponse<Category[]>;
    return body.responseObject.map(category => {
        return { ...category, createdAt: new Date(category.createdAt) } as Category
    });
}

export async function getPaymentTypes(apiKey: string, clientId: string): Promise<PaymentType[]> {
    const response = await fetch(`${appSettings.baseUrl}/api/paymenttype`, {
        method: 'GET',
        mode: "cors",
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Authorization': `Basic ${apiKey}`,
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'x-client-id': clientId,
        }
    });
    const body = await response.json() as GetResponse<PaymentType[]>;
    return body.responseObject.map(paymentType => {
        return {
            ...paymentType,
            archivedAt: paymentType.archivedAt !== null ? new Date(paymentType.archivedAt) : null,
        } as PaymentType
    });
}
