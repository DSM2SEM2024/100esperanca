import { baseUrl } from "./baseUrl/baseUrl";

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



export async function createUser(body) {
    const roles = body.roles.map(element => element);
    const addresses = body.addresses.map(element => element);

    const bodyResquest = JSON.stringify({
        "name": body.name,
        "email": body.email,
        "password": body.password,
        "role": roles,
        "addresses": addresses
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
        throw new Error(`Erro ao criar usuário: ${error}`);
    }
}