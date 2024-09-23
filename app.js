const express = require('express');
const app = express();

app.use("/test",(req, res) => {
    res.send("request accepted...")
});

app.listen(4200, () => {
    console.log("Listening in 4200");
})