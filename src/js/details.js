import MarvelAPI from "./marvelAPI.js";

// Criando uma nova instância da marvelAPI onde estão todos os métodos necessários para popular os dados e a interface.
const marvelAPI = new MarvelAPI();

// Adicionando o ID do quadrinho clicado na tela inicial no LOCALSTORAGE.
const comicId = localStorage.getItem('ls-selected-comic-id');

marvelAPI.getComic(comicId);