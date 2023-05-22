import React, { useContext, useEffect, useState } from "react";
import { StateContext } from "../contexts/StateContext";

export const LoginComponent = () => {
    const [apiKeySecret, setApiKeySecret] = useState('');
    const [apiKeyId, setApiKeyId] = useState('');
    const [clientId, _setClientId] = useState('');
    const [combinedLoginDetails, _setCombinedLoginDetails] = useState('');
    const { apiKeyExists, dataFetched, setApiKey, fetchData, setClientId, removeApiKey } = useContext(StateContext);

    function Login() {
        const base64Encoded = btoa(`${apiKeyId}:${apiKeySecret}`);
        setClientId(clientId);
        setApiKey(base64Encoded);
    }
    function setCombinedLoginDetails(value?: string) {
        if (value) {
            const loginDetails = value.split(':');
            if (loginDetails.length !== 3) {
                _setCombinedLoginDetails('');
                return;
            }
            setApiKeyId(loginDetails[0]);
            setApiKeySecret(loginDetails[1]);
            _setClientId(loginDetails[2]);
            _setCombinedLoginDetails(value);
        }
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
            <div>
                <label>Login Details</label>
                <input
                    value={combinedLoginDetails}
                    onChange={(v) => setCombinedLoginDetails(v.target.value)}
                />
            </div>
            <div>
                <label>Api key Id</label>
                <input value={apiKeyId} onChange={(v) => setApiKeyId(v.target.value)} />
                <label>Api key secret</label>
                <input value={apiKeySecret} onChange={(v) => setApiKeySecret(v.target.value) } />
                <label>Client Id</label>
                <input value={clientId} onChange={(v) => _setClientId(v.target.value)} />
            </div>

            <button onClick={() => Login()}>Login</button>
        </div>
    );
}
