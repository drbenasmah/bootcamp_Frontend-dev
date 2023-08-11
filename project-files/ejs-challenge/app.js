//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");

const homeStartingContent = "Welcome to my coding journal, where I'm chronicling a transformative journey from being a medical doctor to diving into the world of software engineering. My goal? To leverage blockchain technology for innovative healthcare solutions. Having witnessed the potential of tech in healthcare, I'm driven to bridge the gap further. This 100-day coding adventure serves as a testament to my progress, capturing the moments of growth, challenges, and triumphs. Through this journal, I aim to showcase not just technical skills but also the mindset of curiosity and innovation. As I master coding languages and navigate software engineering intricacies, my focus remains on harnessing blockchain's power for healthcare advancement. Whether you're intrigued by healthcare, technology, or the blend of both, join me on this exhilarating journey. Together, we'll unravel coding's mysteries, explore blockchain's potential, and pave the way for a healthier future. 🌐💡 #CodingForHealth #BlockchainInnovation #BridgingHealthTech";
const aboutContent = "I'm Ben Asmah, a dedicated medical doctor and aspiring software engineer. Intrigued by the potential of blockchain in healthcare, I've embarked on a dual journey—melding my medical expertise with coding skills. Embracing the #100DaysOfCode challenge, I immerse myself daily in coding languages and web development. Just as precision is key in diagnosing patients, it's also vital in crafting code. My aim: to seamlessly integrate blockchain's power into healthcare for enhanced security and transparency. Join me as I combine medicine and tech to revolutionize patient care and inspire others to code for good. 🌟 #BlockchainHealthcare #MedicalDoctorTurnedCoder #CodingForGood";
const contactContent = "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

let posts = [];

app.get("/", function(req, res){
  res.render("home", {
    startingContent: homeStartingContent,
    posts: posts
    });
});

app.get("/about", function(req, res){
  res.render("about", {aboutContent: aboutContent});
});

app.get("/contact", function(req, res){
  res.render("contact", {contactContent: contactContent});
});

app.get("/compose", function(req, res){
  res.render("compose");
});

app.post("/compose", function(req, res){
  const post = {
    title: req.body.postTitle,
    content: req.body.postBody
  };

  posts.push(post);

  res.redirect("/");

});

app.get("/posts/:postName", function(req, res){
  const requestedTitle = _.lowerCase(req.params.postName);

  posts.forEach(function(post){
    const storedTitle = _.lowerCase(post.title);

    if (storedTitle === requestedTitle) {
      res.render("post", {
        title: post.title,
        content: post.content
      });
    }
  });

});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});