//Install express server
const express = require('express');
const path = require('path');
const fs = require('file-system');

const app = express();

//Retrive Data from DB
function getDBData() {
    const dt = JSON.parse(fs.readFileSync('./db.json'));
    console.log(dt);
    return dt;
}

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist'));

app.get('/api/contacts', (req, res) => {
    const allContacts = getDBData();
    return res.status(200).json(allContacts.contacts);
});

app.get('/*', function (req, res) {

    res.sendFile(path.join(__dirname + '/dist/index.html'));
});

// Start the app by listening on the default Heroku port
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    process.stdout.write(`The server is available on ${__dirname}:${PORT}`);
});