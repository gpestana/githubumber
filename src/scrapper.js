var request = require('request'),
    cheerio = require('cheerio');

var start = function(repo, cb) {
  var data_types = [
    //'proposed-pull-requests',
    //'merged-pull-requests',
    //'closed-issues',
    //'new-issues',
    'active_discussions'
  ];

  var data = {
    'proposed-pull-requests': {},
    'merged-pull-requests': {},
    'closed-issues': {},
    'new-issues': {},
    'active_discussions': {}
  }

  request.get('https://github.com/'+repo+'/pulse', 
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
