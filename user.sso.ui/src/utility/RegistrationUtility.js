const RegistrationUtility = async (FormData) => {
    // Add roleName based on isWorkingProfessional value
    const { confirmPassword, isWorkingProfessional, ...DataSubmit } = FormData;
    DataSubmit.roleName = isWorkingProfessional ? 'Professional' : 'Current Learning';

    try{
        const response = await fetch('https://localhost:44398/api/Users/userinfo/registration', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(DataSubmit)
        });
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        return response.json();
    }
    catch (error) {
        console.error("Fetch error:", error);
        throw error; // Re-throw to handle it in the component
    }
};

export default RegistrationUtility;
