'use strict';
var os = require('os');
var OSinfo = require('./modules/OSinfo');

process.stdin.setEncoding('utf-8');

console.log('Type /showVersion to display Node version, type /systemLanguage to display system language, /getOSinfo to display information about your system, type /exit to quit');

process.stdin.on('readable', function() {
    var input = process.stdin.read();
    if (input !== null) {
        var instruction = input.trim();
        var version = process.versions.node;
        var language = process.env.LANG;
        switch (instruction) {
    	case '/exit':
    		process.stdout.write('Quitting app!' + '\n');
            process.exit();
            break;
        case '/showVersion':
        	process.stdout.write('Node version: ' + version + '\n');
        	break;
        case '/systemLanguage':
        	process.stdout.write('Sysyem language: ' + language + '\n')
        	break;
        case '/getOSinfo':
            OSinfo.print();
            break;
        default: 
        	console.log('Wrong instruction!');
        	break;
    	}
    };
});
