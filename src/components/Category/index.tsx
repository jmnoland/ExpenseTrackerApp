import React from "react";
import { Container } from "../shared";
import { CategoryViewComponent } from "./CategoryView";

export function CategoryComponent() {
    return (
        <div>
            <Container title={'Expenses'} maxHeight={250} overflow={true}>
                <CategoryViewComponent />
            </Container>
        </div>
    );
}
