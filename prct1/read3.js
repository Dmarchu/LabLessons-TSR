const fs = require('fs')

function readFilePromise(filename) {
    return new Promise((resolve, reject) => {
        fs.readFile(filename,(err,data)=> {
            if (err) reject(err+'')
            else resolve(data+'')
        })
    })
}

async function readFilesAwait() {
    try {
        console.log("await- " + await readFilePromise("read.txt"));
        console.log("await- " + await readFilePromise("penis2.txt"));
    } catch (e) {
        console.error(e+'')
    }
}

readFilePromise("read.txt").then(console.log, console.error)
readFilePromise("penis.txt").then(console.log, console.error)
readFilesAwait();
