
const http = require("http");

http.createServer((req, res) => {
    res.write("hello this is Rahul");
    res.end();
  }).listen(4500);
