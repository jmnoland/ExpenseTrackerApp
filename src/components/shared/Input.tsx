import React from "react";

type InputProps = {
    width: number;
    typeValue: string;
    value: string | number | undefined;
    setValue: (value: (((prevState: string) => string) | string)) => void;
}

export function Input({ width, typeValue, value, setValue }: InputProps): JSX.Element {

    return (
        <input
            style={{ width: width }}
            type={typeValue}
            value={value === undefined ? '' : value}
            onChange={(e) => setValue(e.target.value)}
        />
    );
}
