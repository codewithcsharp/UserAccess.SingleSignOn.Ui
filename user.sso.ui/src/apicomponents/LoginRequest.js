import React, { useState, useEffect } from 'react';

const [loading, setLoading] = useState(true);
const [result, setResult] = useState(null);
const [error, setError] = useState(null);

useEffect(() => {
  const LoginRequestAsync = async () => {
	try {
	  const request = await fetch('https://localhost:44398/api/Users/loginrequest', {
		method: 'POST',
		headers: {
		  'content-type': 'application/json'
		},
		body: JSON.stringify({request})
	  })
	  if(!request.ok)
		throw new Error('');
	    const response = await request.json();
	  setResult(response);
	}
	catch(error) {
	  setError(error.message);
	} 
	finally {
	  setLoading(false);
	}
};
	LoginRequestAsync();
}, []);

if(loading) {
  return (<div>Please wait loading...</div>);
}

if (error) {
  return (<div>Something went wrong...</div>);
}
  return (<div>{JSON.stringify(result)}</div>)

export default LoginRequestAsync;
