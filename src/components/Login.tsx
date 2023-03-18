import React, { useContext, useState } from "react";
import { StateContext } from "../contexts/StateContext";

export const LoginComponent = () => {
    const [apiKeySecret, setApiKeySecret] = useState('');
    const [apiKeyId, setApiKeyId] = useState('');
    const { apiKeyExists, setApiKey, removeApiKey } = useContext(StateContext);

    function setEncodeApiKey() {
        const base64Encoded = btoa(`${apiKeyId}:${apiKeySecret}`);
        setApiKey(base64Encoded);
    }

    if (apiKeyExists) {
        return (
            <div>
                <p>**********</p>
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
            <button onClick={() => setEncodeApiKey()}>Login</button>
        </div>
    );
}
