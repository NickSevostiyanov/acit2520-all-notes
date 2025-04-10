const { setTimeout } = require("timers/promises");
const express = require("express");
const app = express()
app.use(express.urlencoded());
const posts = [
    { id: 1, title: "post1"},
    { id: 2, title: "post2"},


]

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("posts", {posts});
});

app.post("/create", async (req, res) => {
    const {title} = req.body;
    posts.push({ id: 3, title});
    await setTimeout(4000);
    res.redirect("/");
});

app.listen(9000, () => console.log("server is running!"));