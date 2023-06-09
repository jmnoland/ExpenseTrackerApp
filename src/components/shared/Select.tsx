import React, {useEffect, useRef, useState} from 'react';
import { SelectOption } from "../../models/SelectOption";

type SelectProps = {
    label?: string;
    width: number;
    initialValue?: string;
    setSelected: (value: string) => void;
    options: SelectOption[];
}

export default function Select({ label, width, initialValue, setSelected, options }: SelectProps): JSX.Element {
    const [value, setValue] = useState('');
    const [displayOptions, setDisplayOptions] = useState(false);
    const [optionsStyling, setOptionsStyling] = useState({
        width: width,
        left: '',
        top: '',
    });
    const inputRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        document.removeEventListener('keydown', enterPressed);
        document.addEventListener('keydown', enterPressed);

        return () => {
            document.removeEventListener('keydown', enterPressed);
        }
    }, [value]);

    useEffect(() => {
        if (initialValue !== undefined) {
            const initialOptionName = searchOptionById(initialValue)?.name ?? '';
            setValue(initialOptionName);
        } else {
            setValue('');
        }
    }, [initialValue]);

    useEffect(() => {
        if (inputRef.current) {
            const elem = inputRef.current;
            if ("getBoundingClientRect" in elem) {
                const bounds = elem.getBoundingClientRect();
                setOptionsStyling({ ...optionsStyling, left: `${bounds.left}px`, top: `${bounds.top + 21}px` });
            }
        }
    }, [inputRef]);

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
        <div className={'flex-justify'}>
            {label === undefined ? null : <span>{label}</span>}
            <input
                ref={inputRef}
                style={{ width: width }}
                value={value}
                onFocus={() => setDisplayOptions(true)}
                onChange={(e) => setValue(e.target.value)}
            />
            {displayOptions ? <div style={optionsStyling} className={"options-container"}>
                {optionElements}
            </div> : null }
        </div>
    );
}
