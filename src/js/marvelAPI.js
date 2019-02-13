export default class MaverlAPI {

    // método que adiciona o evento clique em cada item do grid.
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

    // método responsável por esconder o backdrop.
    disableBackdrop() {
        document.getElementsByClassName('backdrop')[0].style.display = 'none';
        console.dir(document.getElementsByClassName('backdrop')[0].style);
    }

    // método responsável por renderizar os dados na view.
    renderComics(comics) {
        for (let i = 0; i < comics.length; i++) {
            document.getElementById("content").innerHTML += `
            <div class="comic" data-id="${comics[i].id}">
            <img class="comic__cover" src="${comics[i].thumbnail.path}/portrait_uncanny.${comics[i].thumbnail.extension}" alt="">
                <h1 class="comic__title">${comics[i].title}</h1>
                <span class="comic__price">US$ ${comics[i].prices[0].price}</span>
            </div>
            `;
        }
        this.addNavigation();
        this.disableBackdrop();
    }

    // médoto responsável por renderizar os detalhes do quadrinho passar por id.
    renderComicDetail(comics) {
        for (let i = 0; i < comics.length; i++) {
            document.getElementById("content").innerHTML += `
            <div class="comic-container">
                <div>
                    <img class="comic-cover" src="${comics[i].thumbnail.path}/detail.${comics[i].thumbnail.extension}"/>
                </div>
                <div class="comic-info">
                    <div class="comic-info-item">
                        <div class="comic-title">${comics[i].title}</div>
                    </div>
                    
                    <div class="comic-info-item">
                        <div class="comic-label">Description</div>
                        <div class="comic-description">${comics[i].description === null ? 'No description available' : comics[i].description}</div>
                    </div>

                    <div class="comic-info-item">
                        <div class="comic-label">Format</div>
                        <div class="comic-format">${comics[i].format}</div>
                    </div>

                    <div class="comic-info-item">
                        <div class="comic-label">Price</div>
                        <div class="comic-price">US$ ${comics[i].prices[0].price}</div>
                    </div>
                </div>
            </div>

            `;
        }
        this.disableBackdrop();
    }

    // método responsável por requisitar os dados dos quadrinhos da API da marvel.
    getComics() {
        const url = "http://gateway.marvel.com/v1/public/comics";

        fetch(
            `${url}?apikey=b6444bc283a9444d38fc07d5b48d3149&ts=3&hash=277c7d7a576c9833c4ba7368f2b5c0ac&offset=500&limit=40`,
            {
                headers: new Headers({
                    "Content-Type": "application/json"
                })
            }
        ).then(response => {
            response.json().then(r => {
                this.renderComics(r.data.results);
            });
        });
    }

    // método utilizado para pesquisar os quadrinho pelo título WIP...
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

    // método responsável por trazer os dados do quadrinho pelo id
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
                this.renderComicDetail(r.data.results);
            });
        });
    }
}