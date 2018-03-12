//Express code Here//
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

app.use(bodyParser.json());
app.use(cors());

let favorites = [];
let id = 0;

app.get("/favorites", (req, res) => {
  res.status(200).json(favorites);
});

app.post("/favorites", (req, res) => {
  favorites.push(req.body.favorite);
  id++;
  res.status(200).json(favorites);
});

// app.delete("/favorites/:index", (req, res) => {
//   for(let i = 0; i < favorites.length; i ++){
//     if(favorites[i].index === +req.params.index){
//       favorites.splice(i,1)
//       return res(200).send(favorites)
//     }
//   }
// })

app.delete("/favorites/:id", (req, res) => {
 
  for (let i = 0; i < favorites.length; i++) {
    console.log(i, req.params.id)
    if ( i == req.params.id) {
      favorites.splice(i, 1);
      console.log(favorites)
      return res.status(200).send(favorites);
    }
  }
});

const port = 3050;
app.listen(port, () => {
  console.log(`Ship is docked at port ${port}...`);
});
