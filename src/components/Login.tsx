import React, { useContext, useEffect, useState } from "react";
import { StateContext } from "../contexts/StateContext";

export const LoginComponent = () => {
    const [apiKeySecret, setApiKeySecret] = useState('');
    const [apiKeyId, setApiKeyId] = useState('');
    const [clientId, _setClientId] = useState('');
    const { apiKeyExists, dataFetched, setApiKey, fetchData, setClientId, removeApiKey } = useContext(StateContext);

    function Login() {
        const base64Encoded = btoa(`${apiKeyId}:${apiKeySecret}`);
        setClientId(clientId);
        setApiKey(base64Encoded);
    }
    useEffect(() => {
        if (apiKeyExists && !dataFetched) fetchData();
    }, [apiKeyExists, dataFetched, fetchData]);

    if (apiKeyExists) {
        return (
            <div>
                <button onClick={removeApiKey}>Logout</button>
            </div>
        );
    }

    return (
        <div>
            <label>Api key Id</label>
            <input value={apiKeyId} onChange={(v) => setApiKeyId(v.target.value)} />
            <label>Api key secret</label>
            <input value={apiKeySecret} onChange={(v) => setApiKeySecret(v.target.value) } />
            <label>Client Id</label>
            <input value={clientId} onChange={(v) => _setClientId(v.target.value)} />
            <button onClick={() => Login()}>Login</button>
        </div>
    );
}
