import Container from "../shared/Container";
import React from "react";
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
