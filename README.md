# gitumber
Scraps any public repo's pulse page for it's latest stats


###Install

npm install gitumber

###Usage

```javascript
var gitumber = require('gitumber');

var opts = {
	'repo': 'nodejs/node',
	'time_windows': 'daily'
};

gitumber.get_data(opts, function(data, err){
	if(err) {
		console.error(err);
	} else {
		//do stuff with data
	}
});
```

###Options
The options object MUST contain a 'repo' property and an OPTINAL 'time_windows' property. If the 'time_windows' is not defined, it will be interpreted as 'weekly'. 

Other supported time_windows:

- 'daily'
- 'halfweekly'
- 'weekly'
- 'monthly'

Note: If the 'time_windows' property is not one of the option supported, it will default to 'time_windows'

ex:

```javascript
var opts = {
	'repo': 'nodejs/node',
	'time_windows': 'daily'
};
```

###Data
The data returned if formated as followed:


```javascript
{ 
	'proposed-pull-requests': {
		'#<nr>': '<title>',
		...
	},
  	'merged-pull-requests': {
		'#<nr>': '<title>',
		...
  	},
  	'closed-issues': {
 		'#<nr>': '<title>',
		...
  	},
  	'new-issues': {
 		'#<nr>': '<title>',
		...
  	} 
}
```


###Contribuitions
Go ahead, fork the project and send a pull request with your contribuition.