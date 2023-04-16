import Container from "../shared/Container";
import React from "react";
import { ExpenseViewComponent } from "./ExpenseView";

export function ExpenseComponent() {
    return (
        <div>
            <Container title={'Expenses'} maxHeight={250} overflow={true}>
                <ExpenseViewComponent />
            </Container>
        </div>
    );
}
