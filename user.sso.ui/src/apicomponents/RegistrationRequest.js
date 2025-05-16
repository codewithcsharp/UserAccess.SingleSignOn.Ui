import React, { useState } from 'react';

const RegistrationRequest = ({ FormData, OnSuccess, OnError }) => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleRegister = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('https://localhost:44398/api/Users/userinfo/registranstion', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(FormData)
      });
      if (!response.ok) throw new Error('Registration failed');
      const data = await response.json();
      setResult(data);
      if (OnSuccess) OnSuccess(data);
    } catch (err) {
      setError(err.message);
      if (OnError) OnError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button onClick={handleRegister} disabled={loading}>
        {loading ? 'Registering...' : 'Register'}
      </button>
      {error && <div>Something went wrong... {error}</div>}
      {result && <div>{JSON.stringify(result)}</div>}
    </div>
  );
};

export default RegistrationRequest;