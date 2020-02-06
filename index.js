const express = require('express'); //eslint-disable-line
const reload = require('reload'); //eslint-disable-line
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, './public'),
    filename: (req, file, cb) => cb(null, 'big-' + file.originalname)
});

const upload = multer({ storage });

const app = express();

const PORT = 3000;

app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('home');
    console.log('Da truy cap');
});

app.post('/signup', upload.single('profile'), (req, res) => {
    res.send(req.body);
});

reload(app);

app.listen(PORT, () => {
    console.log(`Server listen at port ${PORT}.`);
});
