import React from 'react';

type ContainerProps = {
    title: string,
    maxHeight: number;
    overflow: boolean;
    children: React.ReactNode,
}

export default function Container({ title, maxHeight, overflow, children }: ContainerProps): JSX.Element {
    const initialOverflow = overflow ? 'auto' : 'none';
    return (
        <div>
            <div className={"title"} style={{ padding: '10px' }}>{title}</div>
            <div style={{ padding: '0 10px 10px 10px', maxHeight: `${maxHeight}px`, overflow: initialOverflow }}>
                {children}
            </div>
        </div>
    );
}
