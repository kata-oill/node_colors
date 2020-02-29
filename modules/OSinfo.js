'use strict';
var os = require('os');
var colors = require('colors');
var convertedTime = require('./timeConvertion');


function getOSinfo() {
    var type = os.type();
    if(type === 'Darwin') {
        type = 'OSX';
    } else if(type === 'Windows_NT') {
        type = 'Windows';
    }
    var release = os.release();
    var cpu = os.cpus()[0].model;
    var userInfo = os.userInfo();
    //console.log(colors.error("this is an error"));
    console.log('System:'.grey, type);
    console.log('Release:'.red, release);
    console.log('CPU model:'.cyan, cpu);
    console.log('Uptime: ~'.green, convertedTime.print());
    console.log('User name:'.yellow, userInfo.username);
    console.log('Home dir:'.gray, userInfo.homedir);
}

exports.print = getOSinfo;