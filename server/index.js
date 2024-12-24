const express = require('express');
const cors = require('cors');

const app = express()

app.use(express.json())
app.use(cors({
    origin: 'https://health-declerations-lg.onrender.com'
}))

app.use('/declerations', require('./routes/declerations'));
app.use('/users', require('./routes/users'));

app.get('/', (req, res) => {
    res.send('welcome!!!')
})

const port = process.env.PORT || 2000

app.listen(port, () => {
    console.log(`listening to port */${port}`);
})
