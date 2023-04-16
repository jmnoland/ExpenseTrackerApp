import React from "react";
import { Container } from "../shared";
import { RecurringExpenseViewComponent } from "./RecurringExpenseView";

export function RecurringExpenseComponent() {
    return (
        <div>
            <Container title={'Recurring Expenses'} maxHeight={250} overflow={true}>
                <RecurringExpenseViewComponent />
            </Container>
        </div>
    );
}
