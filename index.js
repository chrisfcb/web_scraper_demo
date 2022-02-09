const PORT = 8080;

const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/', function(req, res) {
    res.json(`Now viewing PORT: ${PORT}`)
})

app.get('/results', (req, res) => {
    axios(url)
    .then(response => {
        const html = response.data
        const $ = cheerio.load(html)
        const articles = []

        $('.article-container', html).each(function() {
            const title = $(this).find('.headline').attr('aria-label')
            const url = $(this).find('a').attr('href')
            articles.push({
                title,
                url
            })
        })
        res.json(articles)
    }).catch(err => console.log(err))
})




const url = 'https://www.vg.no/';
//https://www.theguardian.com/international
//fc-item__title


app.listen(PORT, () => console.log(`server running on PORT ${PORT}`))
