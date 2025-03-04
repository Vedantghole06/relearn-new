const API_URL = 'http://localhost:5001/api/forms';

export const createForm = async (formData) => {
    const response = await fetch(`${API_URL}/create`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    });
    return response.json();
};


export const getForms = async () => {
    const response = await fetch(`${API_URL}/all`);
    return response.json();
};

export const getFormByLink = async (link) => {
    const response = await fetch(`${API_URL}/link/${link}`);
    return response.json();
};

export const submitFormResponse = async (responseData) => {
    console.log("Sending data:", responseData); // Log the data being sent
    const response = await fetch(`${API_URL}/submit`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(responseData),
    });
    return response.json();
};
export const getAllUsers = async () => {
    const response = await fetch(`http://localhost:5001/api/users`);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
};

export const deleteUserById = async (id) => {
    const response = await fetch(`http://localhost:5001/api/users/${id}`, {
        method: 'DELETE',
    });
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
};

export const logout = async () => {
    const response = await fetch(`http://localhost:5001/api/users/logout`, {
        method: 'POST',
    });
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
};