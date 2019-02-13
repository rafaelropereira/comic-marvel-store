import MarvelAPI from "./marvelAPI.js";

// Criando uma nova instância da marvelAPI onde estão todos os métodos necessários para popular os dados e a interface.
const marvelAPI = new MarvelAPI();
marvelAPI.disableBackdrop();

// Selecionando os elementos do DOM
const inputSearch = document.getElementById('inputSearch');
const btnSearch = document.getElementById('btnSearch');

// Adicionando evento clique no botão para pesquisar os quadrinhos.
btnSearch.addEventListener('click', function () {
    marvelAPI.getComicByTilte(inputSearch.value.trim());
});

