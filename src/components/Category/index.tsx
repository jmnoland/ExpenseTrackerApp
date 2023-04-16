import Container from "../shared/Container";
import React from "react";
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
