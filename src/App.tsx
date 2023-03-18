import React from "react";
import { StateProvider } from "./contexts/StateContext";
import { NotificationProvider } from "./contexts/NotificationContext";
import { LoginComponent } from "./components/Login";
import './App.css';

function App() {
  return (
    <div>
      <NotificationProvider>
        <StateProvider>
          <LoginComponent />
        </StateProvider>
      </NotificationProvider>
    </div>
  );
}

export default App;
