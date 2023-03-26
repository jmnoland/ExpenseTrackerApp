import React from 'react';

type ContainerProps = {
    title: string,
    children: React.ReactNode,
}

export default function Container({ title, children }: ContainerProps): JSX.Element {

    return (
        <div>
            <div>{title}</div>
            <div>{children}</div>
        </div>
    );
}
