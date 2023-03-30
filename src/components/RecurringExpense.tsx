import React, { useContext } from 'react';
import { StateContext } from "../contexts/StateContext";
import { parseDateTime } from "../helpers/DateHelper";
import Container from "./shared/Container";

export const RecurringExpenseComponent = () => {
    const { recurringExpenses, categories, paymentTypes } = useContext(StateContext);
    const recurringExpenseRows = recurringExpenses.map(recurringExpense => {
        return <tr key={recurringExpense.recurringExpenseId}>
            <td style={{ width: '200px' }}>{recurringExpense.name}</td>
            <td style={{ width: '150px' }}>{recurringExpense.amount}</td>
            <td style={{ width: '150px' }}>{categories[recurringExpense.categoryId].name}</td>
            <td style={{ width: '150px' }}>{paymentTypes[recurringExpense.paymentTypeId].name}</td>
            <td style={{ width: '100px' }}>{recurringExpense.frequency}</td>
            <td style={{ width: '150px' }}>{parseDateTime(recurringExpense.startDate)}</td>
            <td style={{ width: '150px' }}>
                {recurringExpense.endDate !== null ? parseDateTime(recurringExpense.endDate) : ''}
            </td>
        </tr>
    });

    return (
        <div>
            <Container title={'Recurring Expenses'}>
                <div style={{ maxHeight: '300px', overflow: 'auto' }}>
                    <table>
                        <thead>
                        <tr>
                            <th style={{ width: '200px' }}>Name</th>
                            <th style={{ width: '150px' }}>Amount</th>
                            <th style={{ width: '150px' }}>Category</th>
                            <th style={{ width: '150px' }}>Payment Type</th>
                            <th style={{ width: '100px' }}>Frequency</th>
                            <th style={{ width: '150px' }}>Start Date</th>
                            <th style={{ width: '150px' }}>End Date</th>
                        </tr>
                        </thead>
                        <tbody>
                        {recurringExpenseRows}
                        </tbody>
                    </table>
                </div>
            </Container>
        </div>
    );
}
