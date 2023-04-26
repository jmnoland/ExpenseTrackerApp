import React, { useContext, useState } from 'react';
import { Input, NumberInput } from "../shared";
import { StateContext } from "../../contexts/StateContext";
import {PaymentType} from "../../models/PaymentType";

export function PaymentTypeCreateComponent() {
    const { createNewPaymentType } = useContext(StateContext);
    const [name, setName] = useState('');
    const [charge, setCharge] = useState(0);

    function reset() {
        setName('');
        setCharge(0);
    }
    function save(): void {
        createNewPaymentType({
            name: name,
            charge: charge
        } as PaymentType);
    }

    return (
        <div>
            <Input label={'Name'} width={100} value={name} setValue={setName} />
            <NumberInput label={'Charge'} width={100} value={charge} setValue={setCharge} />
            <div>
                <button onClick={reset}>Reset</button>
                <button onClick={save}>Save</button>
            </div>
        </div>
    );
}
