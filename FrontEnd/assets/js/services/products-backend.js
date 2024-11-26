import { baseUrl } from "../pages/baseUrl/base-url";

const uri = "products";

export async function getAllProducts() {
    try {
        const response = await fetch(`${baseUrl}${uri}`, { 
            method: 'GET', 
            headers: { 
                'Content-Type': 'application/json' 
        }});
        const result = await response.json();
        return result;
    } catch (error) {
        console.error("Erro ao buscar os produtos do backend:", error);
        return [];
    }
}
