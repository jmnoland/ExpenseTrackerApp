import React from "react";
import { Container } from "../shared";
import { PaymentTypeViewComponent } from "./PaymentTypeView";

export function PaymentTypeComponent() {
    return (
        <div>
            <Container title={'Payment Types'} maxHeight={250} overflow={true}>
                <PaymentTypeViewComponent />
            </Container>
        </div>
    );
}
