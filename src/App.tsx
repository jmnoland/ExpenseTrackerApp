import React from "react";
import { StateProvider } from "./contexts/StateContext";
import { NotificationProvider } from "./contexts/NotificationContext";
import { LayoutComponent } from "./components/Layout";
import './App.css';

function App() {
    return (
        <div>
            <NotificationProvider>
                <StateProvider>
                    <LayoutComponent />
                </StateProvider>
            </NotificationProvider>
        </div>
    );
}

export default App;
