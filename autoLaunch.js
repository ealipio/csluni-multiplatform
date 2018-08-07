module.exports = function () {
	const autoLaunch = require('auto-launch');

	const autoLauncher = new autoLaunch({
		name: 'csluni',
		path: 'csluni path'
	});

	autoLauncher.enable();
};