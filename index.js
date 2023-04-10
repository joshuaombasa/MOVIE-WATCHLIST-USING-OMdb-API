const movieInput = document.getElementById("movie-input")
const movieSearchForm = document.getElementById("movie-search-form")
const apiKey = '988db929'

movieSearchForm.addEventListener("submit", (event) => {
    event.preventDefault()
    const movieName = movieInput.value
    console.log(movieName)

    fetch(`http://www.omdbapi.com/?t=${movieName}&plot=full&apikey=${apiKey}&page=2`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        const movies = []
        movies.push(data)
        window.localStorage.setItem('movie', `Josua Ombasa`);
        console.log(movies)

        let html = []

        for (let i=0; i<movies.length; i++) {
            html.push(
        `
        <div class="movie-container">
                <div class="movie-poster">
                <img class="movie-poster-img" src="${movies[i].Poster}" />
                </div>
                <div class="movie-text">
                    <div class="movie-meta">
                        <h4>${movies[i].Title}</h4>
                        <small>⭐ ${movies[i].imdbRating
                        }</small>
                    </div>
                    <div class="movie-stats">
                        <small>${movies[i].Runtime}</small>
                        <small>${movies[i].Type}</small>
                        <div class="btn-contaier">
                            <button class="add-to-watchList-btn">+</button>
                        </div>
                        <small>watchlist</small>
                    </div>
                    <details>
                    <summary>${movies[i].Plot.slice(0,50)}... Read more</summary>
                        <small class="movie-desc">${movies[i].Plot}</small>
                    </details>
                </div>
            </div>
        `
            )
        }



        document.getElementById("top-main").innerHTML = html.join("")
          }

  
    )
})




