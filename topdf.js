var fs = require("fs");
var pdf = require("html-pdf");
var html = fs.readFileSync("./public/index.html", "utf8");
var options = {
  format: "A4",
  border: {
    top: "1in",
    right: "1in",
    bottom: "1in",
    left: "1in",
  },
};

pdf.create(html, options).toFile("./resume.pdf", function (err, res) {
  if (err) return console.log(err);
  console.log(res);
});
