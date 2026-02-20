const express = require("express");
const app = express();
const path = require("node:path");
const assetsPath = path.join(__dirname, "public");


app.use(express.static(assetsPath));

const links = [
  { href: "/", text: "Home" },
  { href: "about", text: "About" },
];

const aboutLinks = [
  { href: "/", text: "Home" },
  { href: "contact", text: "Contact" },
];

const users = ["Rose", "Cake", "Biff"];


app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");


app.use(express.json());

app.get("/", (req, res) => {
  res.render("index", { links: links , users: users});
});

app.get("/about", (req, res) => {
  res.render("about", {aboutLinks: aboutLinks} );
});

const authorRouter = require("./routes/authorRouter");

app.use("/authors", authorRouter);
app.use((req, res, next) => {
 next(new Error("OH NO!"));
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.statusCode || 500).send(err.message);
});



const PORT = 3000;
app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`My first Express app - listening on port ${PORT}!`);
});
