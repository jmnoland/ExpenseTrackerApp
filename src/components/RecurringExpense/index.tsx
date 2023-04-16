import Container from "../shared/Container";
import React from "react";
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
