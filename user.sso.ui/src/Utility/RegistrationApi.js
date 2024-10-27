const RegistrationApiApi = async (FormData) => {
    const { confirmPassword, ...DataSubmit } = FormData;
    const response = await fetch('https://localhost:44398/api/Users/userinfo/registranstion', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(DataSubmit),
        mode: 'cors'
    });
    if(!response.ok) {
        throw new Error('Failed to submit the registration form');
    }
    return response.json();
}

export default RegistrationApiApi;
