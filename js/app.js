const searchForm = document.querySelector("#searchForm")
const searchSubmit = document.querySelector("#submitButton")

searchForm.addEventListener('submit', function (e) {
  e.preventDefault()
  console.log(searchForm.elements)
})