import React from "react";

type InputProps = {
    label?: string;
    width: number;
    value?: string | number;
    setValue: (value: (((prevState: any) => any) | any)) => void;
}

export function Input({ label, width, value, setValue }: InputProps): JSX.Element {

    return (
        <div className={'flex-justify'}>
            {label === undefined ? null : <span>{label}</span>}
            <input
                style={{ width: width }}
                value={value === undefined ? '' : value}
                onChange={(e) => setValue(e.currentTarget.value)}
            />
        </div>
    );
}

export function NumberInput({ label, width, value, setValue }: InputProps): JSX.Element {

    return (
        <div className={'flex-justify'}>
            {label === undefined ? null : <span>{label}</span>}
            <input
                style={{ width: width }}
                type={'number'}
                min={0}
                step={'any'}
                value={value === undefined ? 0 : value}
                onChange={(e) => setValue(e.currentTarget.valueAsNumber)}
            />
        </div>
    )
}
