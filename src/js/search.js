import MarvelAPI from "./marvelAPI.js";

// Criando uma nova instância da marvelAPI onde estão todos os métodos necessários para popular os dados e a interface.
const marvelAPI = new MarvelAPI();
marvelAPI.disableBackdrop();

// Selecionando os elementos do DOM
const inputSearch = document.getElementsByClassName('input-search')[0];
const btnSearch = document.getElementsByClassName('btn-search')[0];

// Adicionando evento clique no botão para pesquisar os quadrinhos.
btnSearch.addEventListener('click', function () {
    marvelAPI.getComicByTilte(inputSearch.value.trim());
});

