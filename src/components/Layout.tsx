import React, {useContext} from "react";
import { StateContext } from "../contexts/StateContext";
import { LoginComponent } from "./Login";
import { ExpenseComponent } from "./Expense";
import { RecurringExpenseComponent } from "./RecurringExpense";
import { CategoryComponent } from "./Category";
import { PaymentTypeComponent } from "./PaymentType";

export function LayoutComponent() {
    const { apiKeyExists } = useContext(StateContext);
    if (!apiKeyExists) {
        return <div>
            <LoginComponent />
        </div>
    }
    return (
        <div>
            <LoginComponent />
            <div className={"feature-container"}>
                <ExpenseComponent />
                <RecurringExpenseComponent/>
                <CategoryComponent />
                <PaymentTypeComponent />
            </div>
        </div>
    );
}
