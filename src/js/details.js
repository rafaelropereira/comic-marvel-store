import MarvelAPI from "./marvelAPI.js";

const marvelAPI = new MarvelAPI();

// Adicionando o ID do quadrinho clicado na tela inicial no LOCALSTORAGE.
const comicId = localStorage.getItem('ls-selected-comic-id');

marvelAPI.getComic(comicId);