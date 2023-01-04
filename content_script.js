
const div = document.createElement("div")
div.innerHTML = `
  <form id="tito-form" style="margin-left: 30px;">
    <input
      style="border: 1px solid #ccc; border-radius: 10px; padding: 10px;" type="text" id="tito-search" autocomplete="off" placeholder="Search icons..."
    >
  </form>
`
const search = document.querySelector(".search")
search.before(div)

search.style.display = "none"

const form = document.querySelector('#tito-form')
const input = document.querySelector('#tito-search')
form.addEventListener('submit', (e) => {
  e.preventDefault()
  if (input.value) {
    const url = `https://react-icons.github.io/react-icons/search?q=${input.value}`
    window.location.href = url
  }
})






