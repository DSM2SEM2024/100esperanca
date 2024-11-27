import { baseUrl } from "./baseUrl/base-url";

const uri = "users"

export async function getAllUsers() {
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



export async function createUsers(body) {

    const bodyResquest = JSON.stringify({
        "name": body.name,
        "email": body.email,
        "password": body.password,
        "role": [
          body.role
        ],
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