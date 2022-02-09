const feedDisplay = document.querySelector('#feed')

fetch('http://localhost:8080/results')
    .then(response => {return response.json()})
    .then(data => {
        data.forEach(article => {
            const articleItem = `<div><h3><a href=` + article.url + `>` + article.title + `</a></h3></div>`
            feedDisplay.insertAdjacentHTML("beforeend", articleItem)
        })
    })
    .catch(err => console.log(err))