const express = require('express')
const bodyParser = require('body-parser');

const app = express()

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/static', express.static(__dirname + '/public'));

app.get('/pay', (req, res) => {
    const summa = req.query.summa;

    // Формируем URL виджета Qiwi
    //const url = 'https://oplata.qiwi.com/create?publicKey=48e7qUxn9T7RyYE1MVZswX1FRSbE6iyCj2gCRwwF3Dnh5XrasNTx3BGPiMsyXQFNKQhvukniQG8RTVhYm3iPwQrNQsye6f5uRiENxbZVuJVuNLVLvckbePDrL6UVYLTy2wzujgWvkUrRvd7zZTBYWegcuMEx8bkLyn7ps52AwfDaU2gfdDFamf94dvQT8&amount=' + summa;
const url = 'https://oplata.qiwi.com/create?publicKey=48e7qUxn9T7RyYE1MVZswX1FRSbE6iyCj2gCRwwF3Dnh5XrasNTx3BGPiMsyXQFNKQhvukniQG8RTVhYm3iPwQrNQsye6f5uRiENxbZVuJVuNLVLvckbePDrL6UVYLTy2wzujgWvkUrRvd7zZTBYWegcuMEx8bkLyn7ps52AwfDaU2gfdDFamf94dvQT8&amount=' + summa


    res.redirect(url);
});


app.listen(3000)