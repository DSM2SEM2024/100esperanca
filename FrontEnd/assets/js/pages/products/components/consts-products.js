import camisetaImg from "../imgs/camiseta.jpg";
import bolsaImg from "../imgs/bolsa.jpg";
import cadernoImg from "../imgs/caderno.jpg";

export const cadernos = [
    { id: 1, nome: "Caderno 1", descricao: "Caderno com a arte X", img: cadernoImg, preco: "50,00 R$" },
    { id: 2, nome: "Caderno 2", descricao: "Caderno com a arte Y", img: cadernoImg, preco: "50,00 R$" },
    { id: 3, nome: "Caderno 3", descricao: "Caderno com a arte Z", img: cadernoImg, preco: "50,00 R$" }
];

export const camisetas = [
    { id: 11, nome: "Estampa Camisa A", descricao: "Camiseta 1", img: camisetaImg, preco: "45,00 R$" },
    { id: 12, nome: "Estampa Camisa B", descricao: "Camiseta 2", img: camisetaImg, preco: "45,00 R$" },
    { id: 13, nome: "Estampa Camisa C", descricao: "Camiseta 3", img: camisetaImg, preco: "45,00 R$" },
    { id: 14, nome: "Estampa Camisa D", descricao: "Camiseta 4", img: camisetaImg, preco: "45,00 R$" },
    { id: 15, nome: "Estampa Camisa E", descricao: "Camiseta 5", img: camisetaImg, preco: "45,00 R$" }
];

export const bolsas = [
    { id: 21, nome: "Estampa Bolsa A", descricao: "Bolsa 1", img: bolsaImg, preco: "75,00 R$" },
    { id: 22, nome: "Estampa Bolsa B", descricao: "Bolsa 2", img: bolsaImg, preco: "75,00 R$" },
    { id: 23, nome: "Estampa Bolsa C", descricao: "Bolsa 3", img: bolsaImg, preco: "75,00 R$" },
    { id: 24, nome: "Estampa Bolsa D", descricao: "Bolsa 4", img: bolsaImg, preco: "75,00 R$" }
];

export const todosProdutos = [...camisetas, ...bolsas, ...cadernos];