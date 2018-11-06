const http = require("http");
const about = require('./facts');

const onRequest = (request, response) => {let change = about[Math.floor(Math.random()*about.length)];
    response.writeHead(200, { "Content-type": "text/plain" });
    response.write(`${change.about}`);
    response.end();
}

http.createServer(onRequest).listen(3000);
