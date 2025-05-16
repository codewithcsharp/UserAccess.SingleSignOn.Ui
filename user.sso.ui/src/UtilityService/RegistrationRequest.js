import React, { useState } from 'react';
import RegistrationUtility from '../utility/RegistrationUtility';

const RegistrationRequest = ({ FormData, OnSuccess }) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);

    const handleSubmit = async () => {
        try {
            response = await RegistrationUtility(FormData);
            setResponse(response);
            if (OnSuccess) OnSuccess(response);
        } catch (error) {
            setError(error.message);
        }
    };

    if (error) {
        return <div>Something went wrong: {error}</div>;
    }

    return <button onClick={handleSubmit}>Submit</button>;
};

export default RegistrationRequest;
