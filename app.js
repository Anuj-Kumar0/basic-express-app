const express = require("express");
const app = express();
app.use(express.json());


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
