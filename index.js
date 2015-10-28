var scrapper = require('./src/scrapper');

var get_data = function(opts, cb) {
	if(!Object.keys(opts).length) {
  		cb({}, 'Err: A valid object with option should be provided');
  		return;
  	}
	scrapper.start(opts, function(data) { 
    cb(data);
  });
};

exports.get_data = get_data;