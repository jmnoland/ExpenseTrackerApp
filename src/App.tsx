import React from "react";
import { StateProvider } from "./contexts/StateContext";
import { NotificationProvider } from "./contexts/NotificationContext";
import { LoginComponent } from "./components/Login";
import { ExpenseComponent } from "./components/Expense";
import { RecurringExpenseComponent } from "./components/RecurringExpense";
import { CategoryComponent } from "./components/Category";
import { PaymentTypeComponent } from "./components/PaymentType";
import './App.css';

function App() {
    return (
        <div>
            <NotificationProvider>
                <StateProvider>
                    <LoginComponent />
                    <div className={"feature-container"}>
                        <ExpenseComponent />
                        <RecurringExpenseComponent/>
                        <CategoryComponent />
                        <PaymentTypeComponent />
                    </div>
                </StateProvider>
            </NotificationProvider>
        </div>
    );
}

export default App;
