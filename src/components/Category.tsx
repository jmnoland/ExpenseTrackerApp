import React, { useContext } from 'react';
import { StateContext } from "../contexts/StateContext";
import { parseDateTime } from "../helpers/DateHelper";
import Container from "./shared/Container";

export const CategoryComponent = () => {
    const { categories } = useContext(StateContext);
    const categoryRows = Object.keys(categories).map(key => {
        const category = categories[key];
        return <tr key={category.categoryId}>
            <td style={{ width: '200px' }}>{category.name}</td>
            <td style={{ width: '150px' }}>{parseDateTime(category.createdAt)}</td>
        </tr>
    });

    return (
        <div>
            <Container title={'Categories'}>
                <div style={{ maxHeight: '300px', overflow: 'auto' }}>
                    <table>
                        <thead>
                        <tr>
                            <th style={{ width: '200px' }}>Name</th>
                            <th style={{ width: '150px' }}>Created At</th>
                        </tr>
                        </thead>
                        <tbody>
                        {categoryRows}
                        </tbody>
                    </table>
                </div>
            </Container>
        </div>
    );
}
