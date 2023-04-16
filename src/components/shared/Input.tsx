import React from "react";

type InputProps = {
    width: number;
    value: string | number | undefined;
    setValue: (value: (((prevState: any) => any) | any)) => void;
}

export function Input({ width, value, setValue }: InputProps): JSX.Element {

    return (
        <input
            style={{ width: width }}
            value={value === undefined ? '' : value}
            onChange={(e) => setValue(e.currentTarget.value)}
        />
    );
}

export function NumberInput({ width, value, setValue }: InputProps): JSX.Element {

    return (
        <input
            style={{ width: width }}
            type={'number'}
            min={0}
            step={'any'}
            value={value === undefined ? 0 : value}
            onChange={(e) => setValue(e.currentTarget.valueAsNumber)}
        />
    )
}
