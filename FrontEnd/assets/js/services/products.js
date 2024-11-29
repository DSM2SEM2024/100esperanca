import { baseUrl } from "../services/baseUrl/base-url";

export const uri = "products";


export async function getAllProducts() {
    try {
        const response = await fetch(`${baseUrl}${uri}`,{
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
    const bodyRequest = JSON.stringify({
      "name": body.name,
      "type_Product": body.typeProduct,
      "cod_Product": body.codProduct,
      "price": body.price,
      "art": body.art
    });
  
    try {
      const response = await fetch(`${baseUrl}${uri}`, {
        method: 'POST',
        body: bodyRequest,
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      // Verificar se a resposta está no formato JSON
      const contentType = response.headers.get("content-type");
      if (response.ok && contentType && contentType.includes("application/json")) {
        const result = await response.json();
        return result.data;
      } else {
        const errorText = await response.text();
        console.error("Erro ao criar o produto:", errorText);
        throw new Error("Erro ao criar o produto. Verifique os dados e tente novamente.");
      }
    } catch (error) {
      console.error("Erro ao criar o produto:", error);
      throw error;
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
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        // Verifica o status da resposta
        if (response.ok) {
            // Sucesso: Retorna um status ou uma mensagem, se disponível
            return response.status === 204 ? "Produto deletado com sucesso" : await response.json();
        } else {
            // Caso de erro, captura a mensagem do backend
            const errorData = await response.json();
            throw new Error(errorData.message || "Erro ao deletar o produto");
        }
    } catch (error) {
        console.error("Erro ao deletar o produto:", error);
        throw error;
    }
}
