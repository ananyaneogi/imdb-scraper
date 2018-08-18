const express = require('express');
const cors = require('cors');

const scraper = require('./scraper');

const app = express();
app.use(cors());

app.get('/', (req, res) => {
  res.json({
    message: 'Get. Set. Scrape!'
  });
});

app.get('/search/:title', (req, res) => {
  scraper
    .searchMovies(req.params.title)
    .then(movies => {
      res.json(movies);
    });
});

app.get('/movie/:imdbID', (req, res) => {
  scraper
    .getMovie(req.params.imdbID)
    .then(movie => {
      res.json(movie);
    });
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
