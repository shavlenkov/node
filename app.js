const express = require('express')
const bodyParser = require('body-parser');

const app = express()

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/static', express.static(__dirname + '/public'));

app.post('/pay', (req, res) => {
    const summa = req.body.summa;

    // Формируем URL виджета Qiwi
    const url = 'https://my.qiwi.com/form/Nykolai-SNzEVfSaLk?amount=' + summa;

    res.redirect(url);
});


app.listen(3000)