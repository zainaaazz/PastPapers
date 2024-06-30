const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static(path.join(__dirname, 'src')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'index.html'));
});

app.get('/grade8.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'grade8.html'));
});

app.get('/8Geography.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', '8Geography.html'));
});

// Add similar routes for other grades and subjects

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
