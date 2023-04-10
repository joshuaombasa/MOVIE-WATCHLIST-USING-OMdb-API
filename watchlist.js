const storedMovieSearchForm = document.getElementById("stored-movie-search-form")
const storedMovieInput = document.getElementById("stored-movie-input")

storedMovieSearchForm.addEventListener("submit", (event) => {
    event.preventDefault()
    const storedMovie = JSON.parse(window.localStorage.getItem('movie'))
    console.log(storedMovie)
    console.log("Hello from watchlist")
})