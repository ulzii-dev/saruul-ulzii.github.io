exports.add = function (req, res, query) {
  var sum = parseInt(query.first) + parseInt(query.second);

  res.writeHead(200, { "Content-Type": "text/html" });
  res.write(`<!DOCTYPE html>
  <html>
  <head><meta charset=\"utf-8\"/>
  <title>Calculator Web Site</title>
  </head>
  <body>
  <p>The sum is: ${String(sum)}</p>
  </body>
  </html> `);

  return res.end();
};
