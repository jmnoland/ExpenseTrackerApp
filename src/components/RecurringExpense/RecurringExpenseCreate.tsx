import React, { useContext, useEffect, useState } from 'react';
import { Input, NumberInput, Select } from "../shared";
import { StateContext } from "../../contexts/StateContext";
import { RecurringExpense } from "../../models/RecurringExpense";
import { SelectOption } from "../../models/SelectOption";

export function RecurringExpenseCreateComponent() {
    const { selected, categories, paymentTypes, createNewRecurringExpense } = useContext(StateContext);
    const [name, setName] = useState('');
    const [amount, setAmount] = useState(0);
    const [categoryId, setCategoryId] = useState('');
    const [paymentTypeId, setPaymentTypeId] = useState('');
    const [startDate, setStartDate] = useState(new Date().toISOString());
    const [endDate, setEndDate] = useState('');
    const [frequency, setFrequency] = useState('');
    const [categoryOptions, setCategoryOptions] = useState([] as SelectOption[]);
    const [paymentTypeOptions, setPaymentTypeOptions] = useState([] as SelectOption[]);
    const [frequencyOptions] = useState(['DAILY', 'MONTHLY', 'YEARLY']
        .map(v => ({ id: v, name: v })) as SelectOption[]);

    useEffect(() => {
        setCategoryOptions(Object.keys(categories).map(key => {
            return { id: key, name: categories[key].name };
        }));
        setPaymentTypeOptions(Object.keys(paymentTypes).map(key => {
            return { id: key, name: paymentTypes[key].name };
        }));
    }, [categories, paymentTypes]);

    useEffect(() => {
        if (selected.categoryId && selected.categoryId !== categoryId) {
            setCategoryId(selected.categoryId);
        }
        if (selected.paymentTypeId && selected.paymentTypeId !== paymentTypeId) {
            setPaymentTypeId(selected.paymentTypeId);
        }
    }, [selected]);

    function reset() {
        setName('');
        setAmount(0);
    }
    function save(): void {
        const expenseEndDate = endDate && endDate !== '' ? new Date(endDate) : null;
        createNewRecurringExpense({
            name,
            amount,
            categoryId,
            paymentTypeId,
            frequency,
            startDate: new Date(startDate),
            endDate: expenseEndDate,
            lastExpenseDate: null,
        } as RecurringExpense);
    }

    return (
        <div>
            <Input label={'Name'} width={100} value={name} setValue={setName} />
            <NumberInput label={'Amount'} width={100} value={amount} setValue={setAmount} />
            <Select label={'Category'} width={100} initialValue={categoryId} setSelected={setCategoryId} options={categoryOptions as SelectOption[]} />
            <Select label={'Payment type'} width={100} initialValue={paymentTypeId} setSelected={setPaymentTypeId} options={paymentTypeOptions as SelectOption[]} />
            <Select label={'Frequency'} width={100} setSelected={setFrequency} options={frequencyOptions as SelectOption[]} />
            <Input label={'Start date'} width={170} value={startDate} setValue={setStartDate} />
            <Input label={'End date'} width={170} value={endDate} setValue={setEndDate} />
            <div>
                <button onClick={reset}>Reset</button>
                <button onClick={save}>Save</button>
            </div>
        </div>
    );
}
