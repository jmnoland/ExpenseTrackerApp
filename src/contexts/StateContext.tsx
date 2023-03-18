import React, {createContext, useEffect, useState} from "react";
import { Expense } from "../models/Expense";
import { RecurringExpense } from "../models/RecurringExpense";
import { Category } from "../models/Category";
import { PaymentType } from "../models/PaymentType";
import { getExpenses, getRecurringExpenses, getPaymentTypes, getCategories } from "../api";

interface StateContext {
    apiKeyExists: boolean,
    expenses: Expense[];
    recurringExpenses: RecurringExpense[];
    categories: Category[];
    paymentTypes: PaymentType[];
    selected: {
        categoryId: string | null,
        paymentTypeId: string | null,
        expenseId: string | null,
        recurringExpenseId: string | null,
    };
    setApiKey: (value: string) => void,
    removeApiKey: () => void,
    setSelected: (value: string, keyName: string) => void,
    getSetExpenses: () => Promise<void>,
    getSetRecurringExpenses: () => Promise<void>,
    getSetCategories: () => Promise<void>,
    getSetPaymentTypes: () => Promise<void>,
}

export const StateContext = createContext<StateContext>({
    apiKeyExists: false,
    expenses: [],
    recurringExpenses: [],
    categories: [],
    paymentTypes: [],
    selected: {
        categoryId: null,
        paymentTypeId: null,
        expenseId: null,
        recurringExpenseId: null,
    },
    setApiKey: () => {},
    removeApiKey: () => {},
    setSelected: () => {},
    getSetExpenses: () => new Promise(() => {}),
    getSetRecurringExpenses: () => new Promise(() => {}),
    getSetCategories: () => new Promise(() => {}),
    getSetPaymentTypes: () => new Promise(() => {}),
});

export const StateProvider = ({ children }: { children: React.ReactNode }): JSX.Element => {
    const [apiKey, _setApiKey] = useState('');
    const [apiKeyExists, setApiKeyExists] = useState(false);
    const [expenses, setExpenses] = useState([] as Expense[]);
    const [recurringExpenses, setRecurringExpenses] = useState([] as RecurringExpense[]);
    const [categories, setCategories] = useState([] as Category[]);
    const [paymentTypes, setPaymentTypes] = useState([] as PaymentType[]);
    const [selected, _setSelected] = useState({
        categoryId: null,
        paymentTypeId: null,
        expenseId: null,
        recurringExpenseId: null,
    });

    function setApiKey(value: string): void {
        _setApiKey(value);
        setApiKeyExists(true);
    }
    function removeApiKey(): void {
        _setApiKey('');
        setApiKeyExists(false);
    }
    function setSelected(value: string, keyName: string): void {
        const newSelected = { ...selected, [keyName]: value };
        _setSelected(newSelected);
    }

    async function getSetExpenses(): Promise<void> {
        const response = await getExpenses(apiKey);
        setExpenses(response);
    }
    async function getSetRecurringExpenses(): Promise<void> {
        const response = await getRecurringExpenses(apiKey);
        setRecurringExpenses(response);
    }
    async function getSetCategories(): Promise<void> {
        const response = await getCategories(apiKey);
        setCategories(response);
    }
    async function getSetPaymentTypes(): Promise<void> {
        const response = await getPaymentTypes(apiKey);
        setPaymentTypes(response);
    }

    useEffect(() => {
        if (apiKey !== '') {
            getSetExpenses();
            getSetRecurringExpenses();
            getSetPaymentTypes();
            getSetCategories();
        }
    }, [apiKey]);

    return (
        <StateContext.Provider
            value={{
                apiKeyExists,
                expenses,
                recurringExpenses,
                categories,
                paymentTypes,
                selected,

                setApiKey,
                removeApiKey,
                setSelected,
                getSetExpenses,
                getSetRecurringExpenses,
                getSetCategories,
                getSetPaymentTypes
            }}
        >
            {children}
        </StateContext.Provider>
    );
};
