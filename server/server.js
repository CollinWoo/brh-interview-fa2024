const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
const PORT = 5001;


// Create an endpoint that returns the greeting "Hello <name>" when somehow given a name

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});