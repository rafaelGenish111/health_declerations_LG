const express = require('express');
const cors = require('cors');

const app = express()

app.use(express.json())
const corsOptions = {
    origin: ['http://localhost:3002', 'https://health-declerations-lg.onrender.com'], // הוספת דומיינים מורשים
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // שיטות HTTP מורשות
    credentials: true, // אם דרוש לשלוח קובצי Cookies
  };
  
app.use(cors(
    // corsOptions
    // {origin: '*'}
));

app.use('/declerations', require('./routes/declerations'));
app.use('/users', require('./routes/users'));

app.get('/', (req, res) => {
    res.send('welcome!!!')
})

const port = process.env.PORT || 2000

app.listen(port, () => {
    console.log(`listening to port */${port}`);
})
