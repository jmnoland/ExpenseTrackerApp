import React, { useContext } from 'react';
import { StateContext } from "../../contexts/StateContext";
import { parseDateTime } from "../../helpers/DateHelper";

export function CategoryViewComponent() {
    const { categories, selected, toggleSelect } = useContext(StateContext);
    const categoryRows = Object.keys(categories).map(key => {
        const category = categories[key];
        const classes = (selected.categoryId === key ? "selected-row" : "") + " pointer";
        return <tr
            className={classes}
            key={category.categoryId}
            onClick={() => toggleSelect(category.categoryId, 'categoryId')}
        >
            <td style={{ width: '200px' }}>{category.name}</td>
            <td style={{ width: '150px' }}>{parseDateTime(category.createdAt)}</td>
        </tr>
    });

    return (
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
    );
}
