const express = require('express');
const apiroutes = require('./routes/apiroutes');
const htmlroutes = require('./routes/htmlroutes');
// const htmlroutes = ('./routes/htmlroutes');
const app = express();
const PORT = process.env.PORT || 3000;

const logRequest = (req, res, next) => {
    console.log(`${req.method} ${req.path}`);
    next();
  };
 
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use('/api', apiroutes);

app.use(logRequest);

app.use('/', htmlroutes);
app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
