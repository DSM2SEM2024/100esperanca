import { baseUrl } from "./baseUrl/base-url";

const uri = "products";

export async function getAllProducts() {
    try {
        const response = await fetch(`${baseUrl}${uri}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const result = await response.json();
        return result.data;
    } catch (error) {
        console.error("Erro ao buscar os produtos do backend:", error);
    }
}

export async function getProductById(id) {
    try {
        const response = await fetch(`${baseUrl}${uri}/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const result = await response.json();
        return result.data;
    } catch (error) {
        console.error("Erro ao buscar os produtos do backend:", error);
    }
}

export async function createProduct(body) {

    const bodyResquest = JSON.stringify({
        "name": body.name,
        "typeProduct": body.typeProduct,
        "codProduct": body.codProduct,
        "price": body.price,
        "art": body.art
    });

    try {
        const response = await fetch(`${baseUrl}${uri}`, {
            method: 'POST',
            body: bodyResquest,
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const result = await response.json();
        return result.data;
    } catch (error) {
        console.error("Erro ao buscar os produtos do backend:", error);
    }
}

export async function updateProduct(body) {

    const bodyResquest = JSON.stringify({
        "name": body.name,
        "typeProduct": body.typeProduct,
        "codProduct": body.codProduct,
        "price": body.price,
        "art": body.art
    });

    try {
        const response = await fetch(`${baseUrl}${uri}`, {
            method: 'PUT',
            body: bodyResquest,
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const result = await response.json();
        return result.data;
    } catch (error) {
        console.error("Erro ao buscar os produtos do backend:", error);
    }
}

export async function deleteProduct(id) {
    try {
        const response = await fetch(`${baseUrl}${uri}/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const result = await response.json();
        return result.data;
    } catch (error) {
        console.error("Erro ao buscar os produtos do backend:", error);
    }
}