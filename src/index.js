const express = require('express');
const app = express();
const port = 3000;

// Define the GET route
app.get('/add-referral', (req, res) => {
    res.send('Referral added successfully');
});

app.get('/', (req, res) => {
    res.send('Server works');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
