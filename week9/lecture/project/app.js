const express = require("express");
const session = require('express-session');
const app = express()
const { users } = require("./database");

app.set("view engine", "ejs");
app.use(express.urlencoded());
app.use(
    session({ 
        secret: 'keyboard cat', 
        cookie: { maxAge: 60000 }
    })
);


// app.post("/login", (req, res) => {
//     const { username, password }= req.body;
//     const foundUser = users.find(
//         (user) => user.username === username && user.password === password
//     );
//     req.session.user = foundUser;
//     res.redirect("/dashboard"); 
// });


app.post("/login", passport.authenticate("local"));

app.get("/dashboard", (req, res) => {
    if (req.session.user) {
        res.render("dashboard", { user: req.session.user});
    } else {
        res.redirect("/login");
    }
});

app.get("./login", (req, res) => {
    res.render("/login");
});

app.listen(8080, () => {
    console.log("Server is running!")
});






