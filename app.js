const cl = console.log;

/* Read/write files
const { readableStreams, readableStreamsViaPipe } = require('./readableStreams');
readableStreams();
readableStreamsViaPipe();
 */

const http = require('http'),
      fs = require('fs'),
      port = 3000,
      host = '127.0.0.1';

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    let inputStream = fs.createReadStream(__dirname + '/readme.txt', 'utf8');
    inputStream.pipe(res);
});

server.listen(port, host);
cl(`Listening to ${host}:${port}`);

//https://www.youtube.com/watch?v=_zvWeGwVkCY