import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
var bandName = "";

app.use(bodyParser.urlencoded({ extended: true }));

function bandNameGenerator(req, res, next) {
  console.log(req.body);
  bandName = req.body["street"] + req.body["pet"];
  next();
}

app.use(bandNameGenerator);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  const emoji = "✌️"; // Add your preferred emoji to the band name
  
  const htmlResponse = `
    <div style="font-family: Arial, sans-serif; text-align: center; background-image: linear-gradient(135deg, #00d2ff, #3a7bd5); padding: 20px;">
      <h1 style="color: #ffffff; font-size: 36px;">Your Band Name is:</h1>
      <h2 style="color: #ffffff; font-size: 24px; margin-bottom: 30px;">${bandName}${emoji}</h2>
      <p style="font-size: 18px; color: #ffffff;">Thank you for submitting your band name!</p>
    </div>
  `;
  
  res.send(htmlResponse);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
