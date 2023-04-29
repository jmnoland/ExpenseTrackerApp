import React, { useState } from "react";
import { Container } from "../shared";
import { RecurringExpenseViewComponent } from "./RecurringExpenseView";
import { RecurringExpenseCreateComponent } from "./RecurringExpenseCreate";

export function RecurringExpenseComponent() {
    const [create, setCreate] = useState(false);

    const header = (
        <div>
            { create ?
                <button onClick={() => setCreate(false)}>Back</button> :
                <button onClick={() => setCreate(true)}>Create</button> }
        </div>
    );
    return (
        <div>
            <Container title={'Recurring Expenses'} header={header} maxHeight={250} overflow={true}>
                {create ? null : <RecurringExpenseViewComponent />}
                {!create ? null : <RecurringExpenseCreateComponent />}
            </Container>
        </div>
    );
}
