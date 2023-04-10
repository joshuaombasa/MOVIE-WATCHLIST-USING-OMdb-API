const storedMovieSearchForm = document.getElementById("stored-movie-search-form")
const storedMovieInput = document.getElementById("stored-movie-input")

storedMovieSearchForm.addEventListener("submit", (event) => {
    event.preventDefault()
    console.log("Hello from watchlist")
})