import React, { useContext } from 'react';
import { StateContext } from "../contexts/StateContext";
import { parseDateTime } from "../helpers/DateHelper";
import Container from "./shared/Container";

export const ExpenseComponent = () => {
    const { expenses, categories, paymentTypes } = useContext(StateContext);
    const expenseRows = expenses.map(expense => {
        return <tr key={expense.expenseId}>
            <td style={{ width: '200px' }}>{expense.name}</td>
            <td style={{ width: '150px' }}>{expense.amount}</td>
            <td style={{ width: '150px' }}>{categories[expense.categoryId].name}</td>
            <td style={{ width: '150px' }}>{paymentTypes[expense.paymentTypeId].name}</td>
            <td style={{ width: '150px' }}>{parseDateTime(expense.date)}</td>
        </tr>
    });

    return (
        <div>
            <Container title={'Expenses'} maxHeight={250} overflow={true}>
                <table>
                    <thead>
                    <tr>
                        <th style={{ width: '200px' }}>Name</th>
                        <th style={{ width: '150px' }}>Amount</th>
                        <th style={{ width: '150px' }}>Category</th>
                        <th style={{ width: '150px' }}>Payment Type</th>
                        <th style={{ width: '150px' }}>Date</th>
                    </tr>
                    </thead>
                    <tbody>
                        {expenseRows}
                    </tbody>
                </table>
            </Container>
        </div>
    );
}
