const form = document.querySelector('#tito-form')
const input = document.querySelector('#tito-search')
form.addEventListener('submit', () => {
  if (input.value) {
    const url = `https://react-icons.github.io/react-icons/search?q=${input.value}`
    chrome.tabs.update({ url });
  }
})
