import MarvelAPI from "./marvelAPI.js";

const marvelAPI = new MarvelAPI();

// Selecionando os elementos do DOM
const inputSearch = document.getElementById('inputSearch');
const btnSearch = document.getElementById('btnSearch');

// Adicionando evento clique no botão para pesquisar os quadrinhos.
btnSearch.addEventListener('click', function () {
    marvelAPI.getComicByTilte(inputSearch.value.trim());
});

