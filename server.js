const express = require('express');
const apiroutes = require('./routes/apiroutes');
const htmlroutes = require('./routes/htmlroutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use('/api', apiroutes);

app.use('/', htmlroutes);
app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
