const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello nodejs')
});
app.get('/node', (req, res) => {
    res.send('all d best')
});
app.post('/node', (req, res) => {
    res.send('thats all thank q')
});
app.put('/node', (req, res) => {
    res.send('just updating')
});
app.delete('/node', (req, res) => {
    res.send('detele content')
});
app.listen(3500, () => {
    console.log('Listening to port 3500')
});