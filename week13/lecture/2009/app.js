const express = require("express");
const app = express();
app.set("view engine", "ejs");

// app.use(express.static("public"));

app.get("/", (req, res) => {
    // const user = getUserFromDatabase();
    res.render("index", { user });
});

app.get("/contact", (req, res) => {
    res.render("contact");
});


app.listen(3000, ()  => {
    console.log("Running on port 3000");
});