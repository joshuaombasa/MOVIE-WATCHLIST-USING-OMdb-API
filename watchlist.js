const storedMovieSearchForm = document.getElementById("stored-movie-search-form")
const storedMovieInput = document.getElementById("stored-movie-input")

storedMovieSearchForm.addEventListener("submit", (event) => {
    event.preventDefault()
    
    
})

keys = Object.keys(localStorage)
    const movies = []

    for (let key of keys) {
        movies.push(JSON.parse(window.localStorage.getItem(key)))
    }

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
                    <div class="small-container">
                        <div class="btn-contaier" id="${movies[i].imdbID
                        }">
                           <button class="add-to-watchList-btn" id="remove-from-watchList-btn">-</button>
                        </div>
                        <label for="remove-from-watchList-btn">Remove</label>
                    </div>
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

    console.log(html)

    document.getElementById("watchlist-top-main").innerHTML = html.join("")

    document.getElementById("remove-from-watchList-btn").addEventListener("click", (event) => {
        console.log(event.target.parentNode.id)
        window.localStorage.removeItem('movie');
        // window.location.reload()
    })