import { Expense } from "../models/Expense";
import { RecurringExpense } from "../models/RecurringExpense";
import { Category } from "../models/Category";
import { PaymentType } from "../models/PaymentType";
import appSettings from "../appsettings.json";
import { GetResponse } from "../models/GetResponse";

export async function getExpenses(apiKey: string, clientId: string): Promise<Expense[]> {
    const response = await fetch(`http://${appSettings.baseUrl}/api/expense`, {
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
    return body.responseObject;
}

export async function getRecurringExpenses(apiKey: string, clientId: string): Promise<RecurringExpense[]> {
    const response = await fetch(`http://${appSettings.baseUrl}/api/recurringexpense`, {
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
    return body.responseObject;
}

export async function getCategories(apiKey: string, clientId: string): Promise<Category[]> {
    const response = await fetch(`http://${appSettings.baseUrl}/api/category`, {
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
    return body.responseObject;
}

export async function getPaymentTypes(apiKey: string, clientId: string): Promise<PaymentType[]> {
    const response = await fetch(`http://${appSettings.baseUrl}/api/paymenttype`, {
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
    return body.responseObject;
}
