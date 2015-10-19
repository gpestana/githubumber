var scrapper = require('./src/scrapper');


scrapper.start('nodejs/node', function(data) { 
  console.log(data);
});
