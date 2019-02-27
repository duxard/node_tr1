const fs = require('fs');

module.exports = { readableStreams, readableStreamsViaPipe };

function readableStreams(){
    const inputStream = fs.createReadStream(__dirname + '/readme.txt', 'utf8'),
          writeStresm = fs.createWriteStream(__dirname + '/writeme.txt');

    inputStream.on('data', chunk => {
        console.log(`Data received: ${chunk}`);
        writeStresm.write(chunk);
    });
}

function readableStreamsViaPipe(){
    const inputStream = fs.createReadStream(__dirname + '/readme.txt', 'utf8'),
        writeStresm = fs.createWriteStream(__dirname + '/writeme.txt');

    inputStream.pipe(writeStresm);
}



