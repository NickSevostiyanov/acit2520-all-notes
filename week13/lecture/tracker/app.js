const express = require("express");
const app = express();
app.use(express.urlencoded()); // Adds support for forms
app.set("view engine", "ejs");
const database = [
    {id: 1, title: "Title 1"},
    {id: 2, title: "Title 2"},

];

// app.use(express.static("public"));

app.post("/createAssignment", (req, res) => {
    const { title } = req.body;
    database.push({ id: database.length + 1, title: title});
//  ^^^^^^^^^^^^^
    // Code 302 = Update due to new post / get


//  res.redirecter sends [302 + "/"] post to browser
//  VVVVVVVVVVVVVV
    res.redirect("/");
});

app.get("/", (req, res) => {
    // const user = getUserFromDatabase();
    res.render("index", { assignments: database });

    // res.render  
        // takes index.ejs
        // takes data from database
        // combines custom index.ejs + data (mashes it together)


    // ssr
        // Server Side Rendering
        // res.render occurs on the server side
        // MPA uses SSR
            // multi-page applications uses Server Side Rendering!


});

// app.get("/contact", (req, res) => {
//     res.render("contact");
// });


app.listen(3000, ()  => {
    console.log("Running on port 3000");
});