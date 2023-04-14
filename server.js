const express = require('express');
const apiroutes = require('./routes/apiroutes.js')
const htmlroutes = ('./routes/htmlroutes.js')
const app = express();
const PORT = process.env.PORT || 3000;
//middleware
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}))
app.use('/api', apiroutes)
app.use('/', htmlroutes)

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`))

// const writeToFile = (destination, content) =>
//     fs.writeFile(destionation, JSON.stringify(content, null, 4), (err) =>
//     err ? console.error(err) : console.info(`\nData written to $(destination)`)
//     );

// const readAndAppend = (content, file) => {
//     fs.readFile(file, 'utf8', (err, data) => {
//         if (err) {
//             console.error(err);
//         } else {
//             const parsedData = JSON.parse(data);
//             parsedData.push(content);
//             writeToFile(file, parsedData);
//         }
//     });
// }

// app.get('/', (req, res) =>
//     res.sendFile(path.join(__dirname, '/public/index/html'))
// );

// app.get('/api/notes', (req, res) => {
//     console.log(res.json(db))
// });

// app.post('/api/notes', (req, res) => {
//     console.info(`${req.method} request received to add TIP`)
//     const { title, text, id } = req.body;

//     if (req.body) {
//         const newTip = {
//             title,
//             text,
//             id
//         };

//         readAndAppend(newTip, './db/db.json');
//         res.json(`Tip added Succesfully!!`);
//     } else {
//         res.error('Error adding your TIP');
//     } 
// });

