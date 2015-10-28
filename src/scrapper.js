var request = require('request'),
    cheerio = require('cheerio');

var start = function(opts, cb) {
  var time_window = opts.time_window;

  var data_types = [
    'proposed-pull-requests',
    'merged-pull-requests',
    'closed-issues',
    'new-issues'
  ];

  var data = {
    'proposed-pull-requests': {},
    'merged-pull-requests': {},
    'closed-issues': {},
    'new-issues': {}
  }

  request.get('https://github.com/'+opts.repo+'/pulse/'+time_window+'', 
    function(err, res, doc) {
      $ = cheerio.load(doc); 
      data_types.forEach( function(type) {
        $('#'+type+'+ ul > li').each(function(){
          var id = $(this).find('.num').text();
          var title = $(this).find('.title').text();
          data[type][id] = title;
        });
      });  
      cb(data);
  });
}

exports.start = start;
