let express = require("express");
let multer = require("multer");

let app = express();

let upload = multer();

app.post("/get-file-size", upload.single('filename'), (req, res) => {
    res.json({size: req.file.size});
})

app.get("/*", (req, res) => {
  //show instructions
  let html =
    "<html><head><title>File Metadata API</title>" +
    "<style>code {color: darkred; background-color: #FEE;}</style>" +
    "</head>" +
    "<body>" +
    "<h3>Submit file to view size</h3>" +
    "<form action=\"/get-file-size\" method=\"post\" enctype=\"multipart/form-data\">" +
    "<p><input type=\"file\" name=\"filename\">" +
    "<p><button type=\"submit\">Submit</button>" +
    "</form>" +
    "</body></html>";
  res.status(200).send(html);
});

let listener = app.listen(process.env.PORT || 5000, () => {
  console.log("App is listening on port " + listener.address().port);
});
