var fs = require('fs');

// The fs.unlink() method deletes the specified file, throws an error if the file does not exist.
fs.unlink('./txt/mynewfile2.txt', function (err) {
    if (err) throw err;
    console.log('Deleted!')
});
