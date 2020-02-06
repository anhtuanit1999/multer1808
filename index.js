const express = require('express'); //eslint-disable-line
const reload = require('reload'); //eslint-disable-line

const upload = require('./uploadConfig');

const app = express();

const PORT = 3000;

app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('home');
    console.log('Da truy cap');
});

const filesConfig = [{ name: 'chinh', maxCount: 1 }, { name: 'phu', maxCount: 2 }];

app.post('/signup', upload.fields(filesConfig), (req, res) => {
    res.send(req.files);
});

app.use((err, req, res, next) => { //eslint-disable-line
    res.send(err.message);
});

app.get('*', (req, res) => res.send('Cannot find this link'));

reload(app);

app.listen(PORT, () => {
    console.log(`Server listen at port ${PORT}.`);
});

