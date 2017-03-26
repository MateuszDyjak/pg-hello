function init() {
	document.addEventListener("deviceready",onDeviceReady, false);
}

function onDeviceReady() {
	navigator.notification.beep(1);
}

function deviceInfo() {

	info =  'Hi, I am your smartphone :-)' + '\n' +
			'=====' + '\n' +
			'Device Name    : '     + device.name     + '\n' +
			'Device Cordova : '  + device.cordova + '\n' +
			'Device Platform: ' + device.platform + '\n' +
			'Device UUID    : '     + device.uuid     + '\n' +
			'Device Model   : '    + device.model     + '\n' +
			'Device Version : '  + device.version  + '\n';


	navigator.notification.alert(info);

}
function displayMyData() {

	info= 'Hello! Below you can find some my personal data \n'

	+ 'Name : Mateusz\n'
	+ 'Last name : Dyjak\n'
	+ 'City : Kraków\n'
	+ 'Settlement : Dąbie\n'
	+ 'District : Grzegórzki'
	+ 'email address : mateuszdyjak5@gmail.com' ;

navigator.notification.alert(info);

}
