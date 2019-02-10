import MarvelAPI from "./marvelAPI.js";

const marvelAPI = new MarvelAPI();

const navItemSearch = document.getElementsByClassName("menu__item-search");
const navItemHome = document.getElementsByClassName("menu__item-home");

navItemSearch[0].addEventListener("click", function () {
    window.location.href = "/search.html";
});

navItemHome[0].addEventListener("click", function () {
    window.location.href = "/home.html";
});

marvelAPI.getComics();