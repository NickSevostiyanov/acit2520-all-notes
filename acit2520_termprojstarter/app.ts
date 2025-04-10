import express from "express";
import session from "express-session";
import passport from "./middleware/passport";

const PORT = process.env.PORT || 8000;

const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      secure: false, // HTTPS Required
      maxAge: 24 * 60 * 60 * 1000,
    },
  })
);

import indexRoute from "./routers/indexRoute";
import authRoute from "./routers/authRoute";
import postsRoute from "./routers/postRouters";
import subsRouters from "./routers/subsRouters";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(passport.session());

app.use("/auth", authRoute);
app.use("/posts", postsRoute);
app.use("/subs", subsRouters);
app.use("/", indexRoute);

app.listen(PORT, () =>
  console.log(`🚀 Server running: http://localhost:${PORT}/`)
);
