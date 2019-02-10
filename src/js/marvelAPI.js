export default class MaverlAPI {
    addNavigation() {
        var comics = document.querySelectorAll('.comic');

        for (var i = 0; i < comics.length; i++) {
            comics[i].addEventListener("click", function () {
                localStorage.setItem('ls-selected-comic-id', this.dataset.id);
                console.log(this.dataset.id);
                window.location.href = "/details.html";
            }, false);
        }
    }

    // método responsável por renderizar os dados na view.
    renderComics(comics) {
        for (let i = 0; i < comics.length; i++) {
            document.getElementById("content").innerHTML += `
            <div class="comic" data-id="${comics[i].id}">
            <img class="comic__cover" src="${comics[i].thumbnail.path}/portrait_uncanny.${comics[i].thumbnail.extension}" alt="">
                <h1 class="comic__title">${comics[i].title}</h1>
                <span class="comic__creators">Teste teste</span>
                <span class="comic__price">US$ ${comics[i].prices[0].price}</span>
            </div>
            `;
        }
        this.addNavigation();
    }

    // método responsável por requisitar os dados dos quadrinhos da API da marvel.
    getComics() {
        const url = "http://gateway.marvel.com/v1/public/comics";

        fetch(
            `${url}?apikey=b6444bc283a9444d38fc07d5b48d3149&ts=3&hash=277c7d7a576c9833c4ba7368f2b5c0ac&offset=500`,
            {
                headers: new Headers({
                    "Content-Type": "application/json"
                })
            }
        ).then(response => {
            response.json().then(r => {
                console.log(r.data);
                //console.log(r.data.results.prices.price);
                //console.log(this.renderComics);
                this.renderComics(r.data.results);
            });
        });
    }

    getComicByTilte(title) {
        const url = `http://gateway.marvel.com/v1/public/comics?title=${title}&`;

        fetch(
            `${url}apikey=b6444bc283a9444d38fc07d5b48d3149&ts=3&hash=277c7d7a576c9833c4ba7368f2b5c0ac&offset=0`,
            {
                headers: new Headers({
                    "Content-Type": "application/json"
                })
            }
        ).then(response => {
            response.json().then(r => {
                console.log(r.data);
            });
        });
    }

    getComic(id) {

        const url = `http://gateway.marvel.com/v1/public/comics/${id}`;

        fetch(
            `${url}?apikey=b6444bc283a9444d38fc07d5b48d3149&ts=3&hash=277c7d7a576c9833c4ba7368f2b5c0ac&offset=100`,
            {
                headers: new Headers({
                    "Content-Type": "application/json"
                })
            }
        ).then(response => {
            response.json().then(r => {
                console.log(r.data);
                this.renderComics(r.data.results);
            });
        });
    }
}