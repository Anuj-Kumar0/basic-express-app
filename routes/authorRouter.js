const { Router } = require("express");
const { getAuthorById } = require('../controllers/authorController');


const authorRouter = Router();

authorRouter.get("/:authorId", getAuthorById);
// authorRouter.get("/", (req, res) => res.send("All authors"));
// authorRouter.get("/:authorId", (req, res) => {
//   const { authorId } = req.params;
//   res.send(`Author ID: ${authorId}`);
// });
// authorRouter.post("/", (req, res) => {
//     console.log(req.body);
//     res.send("Author created");
//   });
  

module.exports = authorRouter;
