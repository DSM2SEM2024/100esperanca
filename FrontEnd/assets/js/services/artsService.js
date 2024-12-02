import { baseUrl } from "./baseUrl/baseUrl";

const uri = "arts";

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

export const getAllArts = () => fetchData(`${baseUrl}${uri}`, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
});