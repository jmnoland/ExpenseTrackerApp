import React, { createContext, useState, useEffect } from "react";

interface NotificationContext {
    content: string;
    visible: boolean;
    setTime: (time: number) => void;
    setContent: (content: string) => void;
}

export const NotificationContext = createContext<NotificationContext>({
    content: '',
    visible: false,
    setTime: (time: number): void => {},
    setContent: (content: string): void => {},
});

export const NotificationProvider = ({ children }: { children: React.ReactNode }): JSX.Element => {
    const [content, setContent] = useState<string>('');
    const [time, setTime] = useState<number>(3000);
    const [visible, setVisible] = useState<boolean>(false);

    useEffect(() => {
        if (content) {
            setVisible(true);
            setTimeout(() => {
                setVisible(false);
                setContent('');
            }, time);
        }
    }, [content]);

    return (
        <NotificationContext.Provider
            value={{
                content,
                visible,
                setTime,
                setContent,
            }}
        >
            {children}
        </NotificationContext.Provider>
    );
};
