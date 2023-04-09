const movieInput = document.getElementById("movie-input")
const movieSearchForm = document.getElementById("movie-search-form")
const apiKey = '988db929'

movieSearchForm.addEventListener("submit", (event) => {
    event.preventDefault()
    const movieName = movieInput.value
    console.log(movieName)

    fetch(`http://www.omdbapi.com/?s=${movieName}&page=2&apikey=${apiKey}`)
    .then(res => res.json())
    .then(data => {
        console.log(data.Search.length)
        const movies = data.Search.slice(0,3)
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
                        <small>⭐ 8.0</small>
                    </div>
                    <div class="movie-stats">
                        <small>117 Min</small>
                        <small>${movies[i].Type}</small>
                        <div class="btn-contaier">
                            <button class="add-to-watchList-btn">+</button>
                        </div>
                        <small>watchlist</small>
                    </div>
                    <small class="movie-desc">A blade runner must pursue and terminate four replicants who stole a ship in space, and have returned to Earth to find their creator.</small>
                </div>
            </div>
`
    )
}



document.getElementById("top-main").innerHTML = html.join("")
  }

  
    )
})




