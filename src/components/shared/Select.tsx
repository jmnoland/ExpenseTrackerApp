import React, { useEffect, useState } from 'react';
import { SelectOption } from "../../models/SelectOption";

type SelectProps = {
    width: number;
    initialValue: string | undefined;
    setSelected: (value: string) => void;
    options: SelectOption[];
}

export default function Select({ width, initialValue, setSelected, options }: SelectProps): JSX.Element {
    const initialOptionName = initialValue === undefined ? '' : searchOptionById(initialValue)?.name ?? '';
    const [value, setValue] = useState(initialOptionName);
    const [displayOptions, setDisplayOptions] = useState(false);

    useEffect(() => {
        document.removeEventListener('keydown', enterPressed);
        document.addEventListener('keydown', enterPressed);

        return () => {
            document.removeEventListener('keydown', enterPressed);
        }
    }, [value]);

    function enterPressed(event: any) {
        if (event.keyCode === 13) {
            validateSetValue();
        }
    }
    function searchOptionsByName(value: string): SelectOption | undefined {
        return options.find(option => option.name === value);
    }
    function searchOptionById(id: string): SelectOption | undefined {
        return options.find(option => option.id === id);
    }
    function validateSetValue(): void {
        const foundOption = searchOptionsByName(value);
        if (foundOption === undefined) {
            setValue('');
        } else {
            setSelected(foundOption.id);
        }
        setDisplayOptions(false);
    }
    function _setSelected(id: string, name: string): void {
        setSelected(id);
        setValue(name);
        setDisplayOptions(false);
    }
    const optionElements = options.map(option => {
        return <div
            id={option.id}
            key={option.id}
            className={"option"}
            onClick={() => _setSelected(option.id, option.name)}
        >{option.name}</div>
    });

    return (
        <div>
            <input
                style={{ width: width }}
                value={value}
                onFocus={() => setDisplayOptions(true)}
                onChange={(e) => setValue(e.target.value)}
            />
            {displayOptions ? <div style={{ width: width }} className={"options-container"}>
                {optionElements}
            </div> : null }
        </div>
    );
}
