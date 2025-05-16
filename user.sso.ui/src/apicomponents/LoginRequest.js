import React, { useState } from 'react';

const LoginRequest = ({ LoginFormData, onSuccess, onError }) => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleLogin = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('https://localhost:44398/api/Users/loginrequest', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(LoginFormData)
      });
      if (!response.ok) throw new Error('Login failed');
      const result = await response.json();
      setResult(result);
      if (onSuccess) onSuccess(result);
    } catch (err) {
      setError(err.message);
      if (onError) onError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* <button onClick={handleLogin} disabled={loading}>
        {loading ? 'Logging in...' : 'Login'}
      </button> */}
      {error && <div>Something went wrong... {error}</div>}
      {result && <div>{JSON.stringify(result)}</div>}
    </div>
  );
};

export default LoginRequest;
