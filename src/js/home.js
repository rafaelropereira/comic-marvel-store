import MarvelAPI from "./marvelAPI.js";

// Criando uma nova instância da marvelAPI onde estão todos os métodos necessários para popular os dados e a interface.
const marvelAPI = new MarvelAPI();

marvelAPI.getComics();