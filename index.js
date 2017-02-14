const express = require('express')

const app = express()

app.get('*', (request, response) => console.log('Bateram aqui'));

app.listen(9000, () => console.log('App is listening at http://localhost:8080...'));
