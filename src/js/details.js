import MarvelAPI from "./marvelAPI.js";

const marvelAPI = new MarvelAPI();
const comicId = localStorage.getItem('ls-selected-comic-id');

marvelAPI.getComic(comicId);