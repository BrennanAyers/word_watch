import $ from 'jquery'


function createNode(element) {
  return document.createElement(element); // Create the type of element you pass in the parameters
}

function append(parent, el) {
  return parent.appendChild(el); // Append the second parameter(element) to the first one
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

$(document).ready(() => {
  const word_count_article = document.getElementById('word-count')
  const url = 'https://wordwatch-api.herokuapp.com/api/v1/top_word'
  fetch(url)
    .then(data => {
      return data.json()
        .then(json => {
          let p = createNode('p')
          p.innerHTML = `${capitalizeFirstLetter(Object.keys(json.word)[0])}: ${Object.values(json.word)[0]} times`
          return append(word_count_article, p)
        })
      })
    .catch(error => {
      console.log(error)
    })
})
