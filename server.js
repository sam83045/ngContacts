//Install express server
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('file-system');
const uuid = require('uuid/v4');

const app = express();

//Retrive Data from DB
function getDBData() {
    const dt = JSON.parse(fs.readFileSync('./db.json'));
    console.log(dt);
    return dt;
}

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist'));

// Body parser (JSON)
app.use(bodyParser.json());

/**
 * Get all the contacts
 */
app.get('/api/contacts', (req, res) => {
    const allContacts = getDBData();
    return res.status(200).json(allContacts.contacts);
});

/**
 * Get contact by ID
 */
app.get('/api/contacts/:id', (req, res) => {
    const allContacts = getDBData();
    const foundContact = allContacts.contacts.find((item) => {
        return item.id == req.params.id;
    });
    return res.status(200).json(foundContact ? foundContact : {});
});

/**
 * Delete contact by ID
 */
app.delete('/api/contacts/:id', (req, res) => {
    const allContacts = getDBData();
    const foundContact = allContacts.contacts.findIndex((item) => {
        console.log(item.id);
        return item.id == req.params.id;
    });
    allContacts.contacts.splice(foundContact, 1);
    fs.writeFileSync('./db.json', JSON.stringify(allContacts));
    return res.status(200).json(foundContact ? foundContact : {});
});


/**
 * Creat new contact
 */
app.post('/api/contacts', (req, res) => {
    const allContacts = getDBData();
    const newContact = req.body;
    newContact.id = uuid();
    allContacts.contacts = [...allContacts.contacts, newContact];
    fs.writeFileSync('./db.json', JSON.stringify(allContacts));
    return res.status(201).json(req.body);
});

app.get('/*', function (req, res) {

    res.sendFile(path.join(__dirname + '/dist/index.html'));
});

// Start the app by listening on the default Heroku port
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    process.stdout.write(`The server is available on ${__dirname}:${PORT}`);
});