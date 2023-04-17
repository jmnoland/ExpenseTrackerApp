import React, { useContext, useEffect, useState } from 'react';
import { Input, NumberInput, Select } from "../shared";
import { StateContext } from "../../contexts/StateContext";
import { SelectOption } from "../../models/SelectOption";
import { Expense } from "../../models/Expense";

export function ExpenseCreateComponent() {
    const { selected, categories, paymentTypes, createNewExpense } = useContext(StateContext);
    const [name, setName] = useState('');
    const [amount, setAmount] = useState(0);
    const [categoryId, setCategoryId] = useState(selected.categoryId ?? '');
    const [paymentTypeId, setPaymentTypeId] = useState(selected.paymentTypeId ?? '');
    const [date, setDate] = useState(new Date().toISOString());
    const [categoryOptions, setCategoryOptions] = useState([] as SelectOption[]);
    const [paymentTypeOptions, setPaymentTypeOptions] = useState([] as SelectOption[]);

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

    return (
      <div>
        <Input width={100} value={name} setValue={setName} />
        <NumberInput width={100} value={amount} setValue={setAmount} />
        <Select width={100} initialValue={categoryId} setSelected={setCategoryId} options={categoryOptions as SelectOption[]} />
        <Select width={100} initialValue={paymentTypeId} setSelected={setPaymentTypeId} options={paymentTypeOptions as SelectOption[]} />
        <Input width={170} value={date} setValue={setDate} />
        <div>
          <button onClick={() => createNewExpense({
              name,
              amount,
              date: new Date(date),
              paymentTypeId,
              categoryId
          } as Expense)}>Save</button>
        </div>
      </div>
    );
}
