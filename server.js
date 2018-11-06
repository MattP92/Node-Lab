const http = require("http");
const user = require('./facts');

const onRequest = (request, response) => {
    response.writeHead(200, { "Content-type": "text/plain" });
    response.write(`${user.show}`);
    response.end();
}

http.createServer(onRequest).listen(3000);