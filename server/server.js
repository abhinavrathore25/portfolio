const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 8080;
const cors = require("cors");

app.use(cors());
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    res.setHeader('Access-Control-Allow-Credentials', false);
    next();
});

app.use(express.static(path.join(__dirname, "../client/build")));

console.log(path.join(__dirname, "../client/build"));

app.get('*', (req, res) => res.sendFile(path.join(__dirname, "../client/build/index.html")));
console.log(path.join(__dirname, "../client/build/index.html"));

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));