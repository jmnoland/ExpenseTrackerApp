import React, { useState } from "react";
import { Container } from "../shared";
import { ExpenseViewComponent } from "./ExpenseView";
import { ExpenseCreateComponent } from "./ExpenseCreate";

export function ExpenseComponent() {
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
            <Container title={'Expenses'} header={header} maxHeight={250} overflow={true}>
                { create ? null : <ExpenseViewComponent /> }
                { !create ? null : <ExpenseCreateComponent /> }
            </Container>
        </div>
    );
}
