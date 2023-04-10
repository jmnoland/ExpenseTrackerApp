import React, { useContext } from 'react';
import { StateContext } from "../contexts/StateContext";
import Container from "./shared/Container";

export const PaymentTypeComponent = () => {
    const { paymentTypes, selected, toggleSelect } = useContext(StateContext);
    const paymentTypeRows = Object.keys(paymentTypes).map(key => {
        const paymentType = paymentTypes[key];
        const classes = (selected.paymentTypeId === key ? "selected-row" : "") + " pointer";
        return <tr
            className={classes}
            key={paymentType.paymentTypeId}
            onClick={() => toggleSelect(paymentType.paymentTypeId, 'paymentTypeId')}
        >
            <td style={{ width: '200px' }}>{paymentType.name}</td>
            <td style={{ width: '150px' }}>{paymentType.charge}</td>
        </tr>
    });

    return (
        <div>
            <Container title={'Payment Types'} maxHeight={200} overflow={true}>
                <table>
                    <thead>
                    <tr>
                        <th style={{ width: '200px' }}>Name</th>
                        <th style={{ width: '150px' }}>Charge</th>
                    </tr>
                    </thead>
                    <tbody>
                    {paymentTypeRows}
                    </tbody>
                </table>
            </Container>
        </div>
    );
}
