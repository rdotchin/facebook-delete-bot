const Nightmare = require('nightmare');       
const nightmare = Nightmare({ show: true });
const user = require('./login/login.js');
const userName = user.username;         //put your username here
const pass = user.password;             //put your password here






logIn();

function logIn(){
	nightmare
		.goto('https://www.facebook.com')
		.type('#email', userName)
		.type('#pass', pass)
		.click('.uiButton')
		.wait(5000)
		.then(function(){
		});
}




