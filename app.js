const express = require("express");
const app = express();
app.use(express.json());


const authorRouter = require("./routes/authorRouter");

app.use("/authors", authorRouter);

const PORT = 3000;
app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`My first Express app - listening on port ${PORT}!`);
});
