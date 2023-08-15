//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require ("mongoose");
const _ = require("lodash");
const date = require(__dirname + "/date.js");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/todolistDB");

const itemsSchema = {
  name: String
};

const Item = mongoose.model("Item", itemsSchema);


const item1 = new Item({
  name: "Welcome to your todolist!"
});

const item2 = new Item({
  name: "Hit the + button to add a new item."
});

const item3 = new Item({
  name: "<-- Hit this to delete an item."
});

const defaultItems = [item1, item2, item3];



  


const listSchema = {
  name: String,
  items: [itemsSchema]
};

const List = mongoose.model("List", listSchema);

app.get("/", function(req, res) {
  Item.find({})
    .then(foundItems => {
      if (foundItems.length === 0) {
        return Item.insertMany(defaultItems);
      } else {
        return Promise.resolve(); // Resolve immediately if items were found
      }
    })
    .then(() => {
      console.log("Successfully saved default items to DB.");
      return Item.find({}); // Fetch items again after inserting defaults
    })
    .then(updatedItems => {
      if (updatedItems.length === 0) {
        console.error("No items found after inserting defaults.");
        return;
      }
      res.render("list", { listTitle: day, newListItems: updatedItems });
    })
    .catch(err => {
      console.error("Error:", err);
      // Handle any other error response or behavior here
    });
});



const day = date.getDate();

  
app.get("/:customListName", async function(req, res){
  const customListName = _.capitalize(req.params.customListName);

  try {
    const foundList = await List.findOne({ name: customListName });
  
    if (!foundList) {
      // Create a new list
      const list = new List({
        name: customListName,
        items: defaultItems
      });
  
      await list.save();
      res.redirect("/" + customListName);
    } else {
      // Show an existing list
      res.render("list", { listTitle: foundList.name, newListItems: foundList.items });
    }
  } catch (err) {
    // Handle any errors that occurred during the process
    console.error(err);
    // Respond with an appropriate error message or redirect
  }
});



app.post("/", async function(req, res) {
  const itemName = req.body.newItem;
  const listName = req.body.list;

  const item = new Item({
    name: itemName
  });

  if (listName === "Today") {
    await item.save();
    res.redirect("/");
  } else {
    try {
      const foundList = await List.findOne({ name: listName });
      if (foundList) {
        foundList.items.push(item);
        await foundList.save();
        res.redirect("/" + listName);
      } else {
        console.log("List not found");
        res.redirect("/");
      }
    } catch (err) {
      console.error("Error:", err);
      res.redirect("/");
    }
  }
});



app.post("/delete", function(req, res) {
  const checkedItemId = req.body.checkbox;
  const listName = req.body.listName;

  if (listName === "Today") {
    Item.findByIdAndRemove(checkedItemId)
      .then(() => {
        console.log("Successfully deleted checked item.");
        res.redirect("/");
      })
      .catch(err => {
        console.error("Error deleting item:", err);
        res.redirect("/");
      });
  } else {
    List.findOneAndUpdate({ name: listName }, { $pull: { items: { _id: checkedItemId } } })
      .then(foundList => {
        if (foundList) {
          res.redirect("/" + listName);
        } else {
          console.log("List not found");
          res.redirect("/");
        }
      })
      .catch(err => {
        console.error("Error:", err);
        res.redirect("/");
      });
  }
});


app.get("/work", function(req,res){
  res.render("list", {listTitle: "Work List", newListItems: workItems});
});

app.get("/about", function(req, res){
  res.render("about");
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
