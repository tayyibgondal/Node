const express = require('express');

const app = express();

// Routes
app.get('/', (req, res) => {
    res.status(200).json({msg: "YEAH..."})
})

app.listen(3000, () => console.log("Express server listening on port 3000..."))