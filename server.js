const express = require('express');
const pg = require('pg');

const DATABASE_URL = process.env.DATABASE_URL || 'postgresql://localhost:5432/timeline';
const PORT = process.env.PORT || 8000;

const app = express();
app.use(express.json());
app.use(express.static('public'));

const databasePool = new pg.Pool({
  connectionString: DATABASE_URL,
  // TODO SSL?
});


app.get('/api/historical_events', async (req, res) => {
  try {
    const result = await databasePool.query('SELECT year, title FROM historical_event');
    res.send(JSON.stringify(result.rows));
  } catch (err) {
    console.error(err);
    res.status(500).send('{}');
  }
});

app.post('/api/historical_events', async (req, res) => {
  try {
    await databasePool.query(
      'INSERT INTO book (year, title) VALUES ($1, $2)',
      [req.body.year, req.body.title]
    );
    // We don't need to send anything, (the frontend doesn't consume anything here) but an empty
    // JSON object makes sense: it's easy enough to add on top of if something changes in the
    // future!
    res.send('{}');
  } catch (err) {
    console.error(err);
    res.status(500).send('{}');
  }
});

app.listen(PORT, () => console.log('Timeline app listening at http://localhost:'+PORT));
