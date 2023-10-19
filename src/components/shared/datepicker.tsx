import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

type DatePickerProps = {
    label?: string;
    value?: Date | null | undefined;
    width?: number,
    setValue: (value: (((prevState: any) => any) | any)) => void;
}

export default function LocalDatePicker({ label, width, value, setValue }: DatePickerProps): JSX.Element {

    return (
        <div className={'flex-justify'}>
            {label === undefined ? null : <span>{label}</span>}
            <DatePicker
                selected={value}
                onChange={(date) => setValue(date)}
            />
        </div>
    );
}
