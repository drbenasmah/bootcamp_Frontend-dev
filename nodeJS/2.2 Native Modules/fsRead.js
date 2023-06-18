const fs = require("fs");

fs.readFile("message.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log("File contents:", data);
});
