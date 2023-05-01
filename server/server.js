const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 8080;
const cors = require('cors');

app.use(cors());

app.use(express.static(path.join(__dirname, "../client/build")));

app.get('*', (req, res) => res.sendFile(path.join(__dirname, "../client/build/index.html")));

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));