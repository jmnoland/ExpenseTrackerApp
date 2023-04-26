import React, { useState } from "react";
import { Container } from "../shared";
import { PaymentTypeViewComponent } from "./PaymentTypeView";
import { PaymentTypeCreateComponent } from "./PaymentTypeCreate";

export function PaymentTypeComponent() {
    const [create, setCreate] = useState(false);

    const header = (
        <div>
            { create ?
                <button onClick={() => setCreate(false)}>Back</button> :
                <button onClick={() => setCreate(true)}>Create</button> }
        </div>
    );

    return (
        <div>
            <Container title={'Payment Types'} header={header} maxHeight={250} overflow={true}>
                {create ? null : <PaymentTypeViewComponent />}
                {!create ? null : <PaymentTypeCreateComponent />}
            </Container>
        </div>
    );
}
