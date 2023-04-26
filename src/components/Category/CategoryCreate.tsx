import React, { useContext, useState } from 'react';
import { Input } from "../shared";
import { StateContext } from "../../contexts/StateContext";

export function CategoryCreateComponent() {
    const { createNewCategory } = useContext(StateContext);
    const [name, setName] = useState('');

    function reset() {
        setName('');
    }
    function save(): void {
        createNewCategory(name);
    }

    return (
        <div>
            <Input label={'Name'} width={100} value={name} setValue={setName} />
            <div>
                <button onClick={reset}>Reset</button>
                <button onClick={save}>Save</button>
            </div>
        </div>
    );
}
