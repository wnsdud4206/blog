const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");

app.use(express.json());
var cors = require("cors");   // npm i cors
app.use(cors());

app.use(express.static(path.join(__dirname, "blog_react/build")));

app.get("/", function(req, res){
  res.sendFile(path.join(__dirname, "blog_react/build/index.html"));   // 두 번째 파라미터로 build된 index.html 경로
})

app.get("/product", function(req, res){
  res.json({name: "black shoes"});
  // fs를 사용해서 json을 불러와 사용해도 되나?
});

app.get("*", function(req, res){
  res.sendFile(path.join(__dirname, "blog_react/build/index.html"));
});


app.listen(8080, function(){
  console.log("listening on 8080");
  console.log("http://localhost:8080");
});