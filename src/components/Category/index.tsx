import React, { useState } from "react";
import { Container } from "../shared";
import { CategoryViewComponent } from "./CategoryView";
import { CategoryCreateComponent } from "./CategoryCreate";

export function CategoryComponent() {
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
            <Container title={'Categories'} header={header} maxHeight={250} overflow={true}>
                {create ? null : <CategoryViewComponent />}
                {!create ? null : <CategoryCreateComponent />}
            </Container>
        </div>
    );
}
