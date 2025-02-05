const http = require("http");
const currenciesJson = require("./currencies.json");
const PORT = 8082;
// const server = http.createServer((req, res) => {
//   //   res.write("Hello from server");
//   //   res.write("\nBye from server");
//   //   res.end("\nFinished!");
//   const serverInfo = {
//     serverName: "Crio Server",
//     version: "1.0.0",
//     currentDate: new Date().toDateString(),
//     currentTime: new Date().toTimeString(),
//   };
//   res.writeHead(200, { "content-type": "application/json" });
//   res.end(JSON.stringify(serverInfo));
//   //   res.end();
// });

// const server = http.createServer((req, res) => {
//   if (req.url === "/" && req.method === "GET") {
//     res.writeHead(200, { "content-type": "text/html" });
//     res.end("<h1>Hello from Server</h1>");
//   } else if (req.url === "/info" && req.method === "GET") {
//     const serverInfo = {
//       serverName: "Crio Server",
//       version: "1.0.0",
//       currentDate: new Date().toDateString(),
//       currentTime: new Date().toTimeString(),
//     };
//     res.writeHead(200, { "content-type": "application/json" });
//     res.end(JSON.stringify(serverInfo));
//   } else {
//     res.writeHead(404, { "content-type": "application/json" });
//     res.end(
//       JSON.stringify({
//         message: "Route does not exist!",
//       })
//     );
//   }
// });

const server = http.createServer((req, res) => {
  let symbol;
  const pathArr = req.url.split("/");
  if (pathArr[1] === "currencies" && pathArr.length === 3) symbol = pathArr[2];
  switch (req.url) {
    case "/":
      res.writeHead(200, { "content-type": "text/html" });
      res.end("<h1>Currency database</h1>");
      break;
    case "/currencies":
      res.writeHead(200, { "content-type": "application/json" });
      res.end(JSON.stringify(currenciesJson.data));
      break;
    default:
      res.writeHead(404, { "content-type": "application/json" });
      res.end(
        JSON.stringify({
          message: "Route does not exist!",
        })
      );
  }
});

server.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
});
