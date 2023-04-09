const movieInput = document.getElementById("movie-input")
const movieSearchForm = document.getElementById("movie-search-form")
const apiKey = '988db929'

movieSearchForm.addEventListener("submit", (event) => {
    event.preventDefault()
    const movieName = movieInput.value
    console.log(movieName)

    fetch(`http://www.omdbapi.com/?s=Batman&page=2&apikey=${apiKey}`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
  }
    )
})