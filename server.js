import express from 'express';

const app = express();

const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('hello from backend to frontend!');
})

app.post('/weather', (req, res) => {
    const {cityName} = req.body;
    res.send('City name successfully received: ' + cityName)
})

app.listen(port, () => {
    console.log('Express app listening to port 3000!');
})



