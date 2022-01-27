var http = require("http");
var url = require("url");
var fs = require("fs");
var adderModule = require("./addModule");

http
  .createServer(function (req, res) {
    var q = url.parse(req.url, true);
    var fileName = "." + q.pathname;

    if (q.pathname == "/add.js") adderModule.add(req, res, q.query);
    else
      fs.readFile(fileName, function (err, data) {
        console.log(err);
        if (err) {
          res.writeHead(404, { "Content-Type": "text/html" });
          return res.end("404 - PAGE NOT FOUND!");
        }
        res.writeHead(200);
        res.write(data);
        return res.end();
      });

    // N1, N2, N3 Answers
    // var query_string = q.year + " " + q.month;
    // var query_string = q.year + " " + q.month;
    // res.write("Query string: " + query_string + "<br>");
    // res.write("Request url: " + req.url + "<br>");
    // res.write("The date and time are currently: " + dm.myDate());
    // console.log(
    //   user.getName() +
    //     " lives in " +
    //     user.getLocation() +
    //     " and was born on " +
    //     user.dob
    // );
    // res.end();
  })
  .listen(8080);
