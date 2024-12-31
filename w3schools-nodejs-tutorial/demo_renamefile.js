var fs = require('fs');

fs.rename('./txt/mynewfile1.txt', './txt/myrenamedfile.txt', function (err) {
    if (err) throw err;
    console.log('Renamed!');
});
