import express from "express";
import bodyParser from "body-parser";
import fs from "node:fs";
const app = express();
const port = 3001;

app.use(bodyParser.json());

const mockData = {
  id: ["1", "2", "3"],
  email: ["bataa@gmail.com", "orgil@gmail.com", "munkh@gmail.com"],
  name: ["bataa", "orgil", "munkh"],
  currencyType: ["MNT", "USD", "RUB"],
};

app.post("/write", (req, res) => {

  const data =  

  fs.writeFile("./DATA.txt", data, 'utf8' ,(err, content) => {
    
  });
  data.push(req.body);
  res.send("success");

});

app.get("/read", (req, res) => {
  fs.readFile("./DATA.txt", "utf8", (err, data) => {
    res.send(data);
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
