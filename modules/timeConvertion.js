'use strict';
var os = require('os');

function timeConvertion() {
	var uptime = os.uptime();
	var hours = Math.floor(uptime / 60 / 60);
	var minutes = Math.floor(uptime / 60) - (hours * 60);
	var seconds = uptime % 60;
	if (uptime >= 3600) {
		return 'hours ' + hours + ', min ' + minutes + ', sec ' + seconds;   
	}
	else  {
		return 'min ' + minutes + ', sec ' + seconds;
	};
}

exports.print = timeConvertion;