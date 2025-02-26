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

export const updateForm = async (formId, formData) => {
    const response = await fetch(`${API_URL}/update/${formId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    });
    return response.json();
};

export const deleteForm = async (formId) => {
    const response = await fetch(`${API_URL}/delete/${formId}`, {
        method: 'DELETE',
    });
    return response.json();
};