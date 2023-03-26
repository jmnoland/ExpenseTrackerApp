import React, { useContext } from 'react';
import { StateContext } from "../contexts/StateContext";
import Container from "./shared/Container";

export const PaymentTypeComponent = () => {
    const { paymentTypes } = useContext(StateContext);
    const paymentTypeRows = Object.keys(paymentTypes).map(key => {
        const paymentType = paymentTypes[key];
        return <tr key={paymentType.paymentTypeId}>
            <td style={{ width: '200px' }}>{paymentType.name}</td>
            <td style={{ width: '150px' }}>{paymentType.charge}</td>
        </tr>
    });

    return (
        <div>
            <Container title={'Payment Types'}>
                <div style={{ maxHeight: '300px', overflow: 'auto' }}>
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
                </div>
            </Container>
        </div>
    );
}
