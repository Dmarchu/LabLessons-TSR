/*const fs = require('fs');
fs.writeFile('write.txt', 'contenido del nuevo fichero', 'utf8', function (err) {
	if (err) {
 		return console.log(err);
 	}
 	console.log('se ha completado la escritura');
});*/

console.log(process.argv.length);
console.log(process.argv[0]);
console.log(process.argv[1]);

if (process.argv.length > 2) {
    fs.writeFile(process.argv[2], 'contenido del nuevo fichero', 'utf8', function (err) {
        if (err) {
            return console.log(err);
        }
        console.log('se ha completado la escritura');
    });
}

