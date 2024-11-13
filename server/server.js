const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
const PORT = 5001;


// Create a GET endpoint /api/greet/<name> that returns a json formatted like {message: "Hello <name>!"}

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});