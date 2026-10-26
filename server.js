const express = require('express');
const path = require('path');
const fetch = require('node-fetch');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname)));

// Built-in CORS Proxy Endpoint for Robust Web Scraping
app.get('/api/scrape', async (req, res) => {
  const targetUrl = req.query.url;
  if (!targetUrl) {
    return res.status(400).json({ error: 'Missing target URL parameter (?url=)' });
  }

  try {
    const response = await fetch(targetUrl, {
      headers: {
        'User-Agent': 'BitSwarmer-Crawler/1.0 (+https://github.com/bitswarmer)'
      }
    });
    const htmlContent = await response.text();
    res.json({
      status: response.status,
      statusText: response.statusText,
      contentType: response.headers.get('content-type'),
      contents: htmlContent
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`[BITSWARMER SERVER RUNNING] http://localhost:${PORT}`);
});
