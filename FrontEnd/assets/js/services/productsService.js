import { baseUrl } from "./baseUrl/baseUrl";

const uri = "products";

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

export const getAllProducts = () => fetchData(`${baseUrl}${uri}`, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
});

export const getProductById = (id) => fetchData(`${baseUrl}${uri}/${id}`, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
});

export const createProduct = (body) => fetchData(`${baseUrl}${uri}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
});

export const updateProduct = (id, productData) => fetchData(`${baseUrl}${uri}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(productData)
});

export const deleteProduct = (id) => fetchData(`${baseUrl}${uri}/${id}`, {
    method: 'DELETE',
    headers: {
        'Content-Type': 'application/json'
    }
});
