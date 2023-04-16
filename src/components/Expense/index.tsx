import React, { useState } from "react";
import { Container } from "../shared";
import { ExpenseViewComponent } from "./ExpenseView";
import { ExpenseCreateComponent } from "./ExpenseCreate";

export function ExpenseComponent() {
    const [create, setCreate] = useState(true);

    return (
        <div>
            <Container title={'Expenses'} maxHeight={250} overflow={true}>
                { create ? null : <ExpenseViewComponent /> }
                { !create ? null : <ExpenseCreateComponent /> }
            </Container>
        </div>
    );
}
