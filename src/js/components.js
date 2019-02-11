// Seleciona todos os links para os componente header e footer
var headerContent = document.querySelectorAll('link[rel="import"]')[0].import.body.children[0];
var footerContent = document.querySelectorAll('link[rel="import"]')[1].import.body.children[0];

// Seleciona o container onde seram inseridos os itens do header e footer
var headerContainer = document.getElementsByClassName('header__container')[0];
var footerContainer = document.getElementsByClassName('footer__container')[0];

// Insere o conteúdo do HTML dentro dos containers previamente selecionados 
headerContainer.innerHTML = headerContent.outerHTML;
footerContainer.innerHTML = footerContent.outerHTML;

// Seleciona os item do menu no header
const navItemSearch = document.getElementsByClassName("menu__item-search");
const navItemHome = document.getElementsByClassName("menu__item-home");

// Adiciona evento clique nos botões do menu
navItemSearch[0].addEventListener("click", function () {
    window.location.href = "/search.html";
});

navItemHome[0].addEventListener("click", function () {
    window.location.href = "/home.html";
});