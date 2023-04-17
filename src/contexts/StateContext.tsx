import React, { createContext, useState } from "react";
import { Expense } from "../models/Expense";
import { RecurringExpense } from "../models/RecurringExpense";
import { Category } from "../models/Category";
import { PaymentType } from "../models/PaymentType";
import { getExpenses, getRecurringExpenses, getPaymentTypes, getCategories, createExpense } from "../api";

interface IStateContext {
    apiKeyExists: boolean,
    dataFetched: boolean,
    expenses: Expense[];
    recurringExpenses: RecurringExpense[];
    categories: Record<string, Category>;
    paymentTypes: Record<string, PaymentType>;
    selected: Record<string, string |null>;
    setApiKey: (value: string) => void,
    setClientId: (value: string) => void,
    removeApiKey: () => void,
    setSelected: (value: string | null, keyName: string) => void,
    toggleSelect: (value: string | null, keyName: string) => void,
    getSetExpenses: () => Promise<void>,
    getSetRecurringExpenses: () => Promise<void>,
    getSetCategories: () => Promise<void>,
    getSetPaymentTypes: () => Promise<void>,
    createNewExpense: (expense: Expense) => Promise<void>,
    fetchData: () => Promise<void>,
}

export const StateContext = createContext<IStateContext>({
    apiKeyExists: false,
    dataFetched: false,
    expenses: [],
    recurringExpenses: [],
    categories: {},
    paymentTypes: {},
    selected: {
        categoryId: null,
        paymentTypeId: null,
        expenseId: null,
        recurringExpenseId: null,
    },
    setApiKey: () => {},
    setClientId: () => {},
    removeApiKey: () => {},
    setSelected: () => {},
    toggleSelect: () => {},
    getSetExpenses: () => new Promise(() => {}),
    getSetRecurringExpenses: () => new Promise(() => {}),
    getSetCategories: () => new Promise(() => {}),
    getSetPaymentTypes: () => new Promise(() => {}),
    createNewExpense: (expense: Expense) => new Promise(() => {}),
    fetchData: () => new Promise(() => {}),
});

export const StateProvider = ({ children }: { children: React.ReactNode }): JSX.Element => {
    const [apiKey, _setApiKey] = useState('');
    const [apiKeyExists, setApiKeyExists] = useState(false);
    const [dataFetched, setDataFetched] = useState(false);
    const [clientId, setClientId] = useState('');
    const [expenses, setExpenses] = useState([] as Expense[]);
    const [recurringExpenses, setRecurringExpenses] = useState([] as RecurringExpense[]);
    const [categories, setCategories] = useState({} as Record<string, Category>);
    const [paymentTypes, setPaymentTypes] = useState({} as Record<string, PaymentType>);
    const [selected, _setSelected] = useState({
        categoryId: null,
        paymentTypeId: null,
        expenseId: null,
        recurringExpenseId: null,
    } as Record<string, string | null>);

    function setApiKey(value: string): void {
        _setApiKey(value);
        setApiKeyExists(true);
    }
    function removeApiKey(): void {
        _setApiKey('');
        setApiKeyExists(false);
        setDataFetched(false);
    }
    function setSelected(value: string | null, keyName: string): void {
        const newSelected = { ...selected, [keyName]: value };
        _setSelected(newSelected);
    }
    function toggleSelect(value: string | null, keyName: string): void {
        if (value === selected[keyName]) setSelected(null, keyName);
        else setSelected(value, keyName);
    }

    async function createNewExpense(expense: Expense): Promise<void> {
        const response = await createExpense(apiKey, clientId, expense);
    }
    async function getSetExpenses(): Promise<void> {
        const response = await getExpenses(apiKey, clientId);
        setExpenses(response);
    }
    async function getSetRecurringExpenses(): Promise<void> {
        const response = await getRecurringExpenses(apiKey, clientId);
        setRecurringExpenses(response);
    }
    async function getSetCategories(): Promise<void> {
        const response = await getCategories(apiKey, clientId);
        const newCategories = response.reduce((total, category) => {
            total[category.categoryId] = category;
            return total;
        }, {} as Record<string, Category>);
        setCategories(newCategories);
    }
    async function getSetPaymentTypes(): Promise<void> {
        const response = await getPaymentTypes(apiKey, clientId);
        const newPaymentTypes = response.reduce((total, paymentType) => {
            total[paymentType.paymentTypeId] = paymentType;
            return total;
        }, {} as Record<string, PaymentType>);
        setPaymentTypes(newPaymentTypes);
    }

    async function fetchData(): Promise<void> {
        setDataFetched(true);
        await getSetCategories();
        await getSetPaymentTypes();
        await getSetRecurringExpenses();
        getSetExpenses();
    }

    return (
        <StateContext.Provider
            value={{
                apiKeyExists,
                dataFetched,
                expenses,
                recurringExpenses,
                categories,
                paymentTypes,
                selected,

                setApiKey,
                setClientId,
                removeApiKey,
                setSelected,
                toggleSelect,
                getSetExpenses,
                getSetRecurringExpenses,
                getSetCategories,
                getSetPaymentTypes,
                createNewExpense,
                fetchData,
            }}
        >
            {children}
        </StateContext.Provider>
    );
};
