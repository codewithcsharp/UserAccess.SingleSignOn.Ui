import React, { useState } from 'react';
import RegistrationApi from '../Utility/RegistrationApi';

const RegistrationRequest = ({ FormData, OnSuccess }) => {
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);

    const handleSubmit = async () => {
        setLoading(true);

        try {
            response = await RegistrationApi(FormData);
            setResponse(response);
            OnSuccess(response);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return <div>Please wait, loading...</div>;
    }

    if (error) {
        return <div>Something went wrong: {error}</div>;
    }

    return <button onClick={handleSubmit}>Submit</button>;
};

export default RegistrationRequest;
