import { baseUrl } from "./baseUrl/baseUrl";

const uri = "users";

const fetchData = async (url, options) => {
    try {
        const response = await fetch(url, options);
        if (!response.ok) throw new Error(`Erro: ${response.statusText}`);
        const result = await response.json();
        return result.data;
    } catch (error) {
        console.error(error.message);
        throw error;
    }
};

export const getAllUsers = () => fetchData(`${baseUrl}${uri}`, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
});

export const getAllUsersWithRoles = () => fetchData(`${baseUrl}${uri}/with-roles`, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
});

export const createUser = (body) => {
    return fetchData(`${baseUrl}${uri}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    });
};
