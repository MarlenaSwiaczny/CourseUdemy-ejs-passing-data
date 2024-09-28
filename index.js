import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const data = {
  fName: "",
  lName: "",
  nameLength: null,
}

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  data.fName= "";
  data.lName= "";
  data.nameLength = null;
  res.render("index.ejs", data);
});

app.post("/submit", (req, res) => {
  data.fName= req.body["fName"];
  data.lName= req.body["lName"];
  data.nameLength = (data.fName).length + (data.lName).length;
  console.log("data", data);
  res.locals = data;
  res.render("index.ejs", data);
});


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
