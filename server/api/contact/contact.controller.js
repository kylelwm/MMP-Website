/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/contacts              ->  index
 */

'use strict';

//import config from './config/environment';
var config = require('./../../config/environment');

// DateFormatter
var dateFormat = require('dateformat');

// Gets a list of Contacts
export function index(req, res) {
  res.json([]);
}

// Sends an email for the booking
export function sendMessage(req, res) {

	var data = req.body
	console.log(data);

	if(verifyContactForm(data)) {
		sendEmailToSelf(buildSubject(data), buildText(data), buildHtml(data));
		console.log('Email sent');
		res.json({
			status: 200,
			message: 'Email sent'
		});
	} else {
		console.log('Error with data');
		res.json({
			status: 400,
			message: 'Email not sent, error with data'
		});
	}
}

function verifyContactForm(data) {
	if(!data.name) {
		console.log('Name');
		return false;
	} else if(!data.number) {
		console.log('Number');
		return false;
	} else if(!data.email) {
		console.log('Number');
		return false;
	}  else if(!data.message) {
		console.log('Message');
		return false;
	} else {
		return true;
	}
}

function buildSubject(data) {
	return 'New message from ' + data.name + ' received on ' + formatDate(data.timestamp);
}

function buildText(data) {
	var text = '<h4>New message</h4>' +
		'<div><b>Name: </b>' + data.name + '</div><br>' + 
		'<div><b>Number: </b>' + data.number + '</div><br>' + 
		'<div><b>Email: </b>' + data.email + '</div><br>' + 
		'<div><b>Date: </b>' + formatDate(data.timestamp) + '</div><br>' +
		'<div><b>Time: </b>' + formatTime(data.timestamp) + '</div><br>' +
		'<div><b>Message: </b>' + data.message + '</div>';

	return text;
}

function buildHtml(data) {
	var html = '<h4>New message</h4>' +
		'<div><b>Name: </b>' + data.name + '</div><br>' + 
		'<div><b>Number: </b>' + data.number + '</div><br>' + 
		'<div><b>Email: </b>' + data.email + '</div><br>' + 
		'<div><b>Date: </b>' + formatDate(data.timestamp) + '</div><br>' +
		'<div><b>Time: </b>' + formatTime(data.timestamp) + '</div><br>' +
		'<div><b>Message: </b>' + data.message + '</div>';

	return html;
}

function formatDate(date) {
	//Eg: 1st January, 1970
	return dateFormat(date, "dS mmmm, yyyy");
}

function formatTime(time) {
	//Eg: 1st January, 1970
	return dateFormat(time, "h:MM:ss TT");
}

function sendEmailToSelf(subject, text, html) {


	var nodemailer = require('nodemailer');

	// create reusable transporter object using the default SMTP transport
	var transporter = nodemailer.createTransport('smtps://' + config.emailUser+ 
		'%40gmail.com:' + config.emailPassword + '@smtp.gmail.com');

	// setup e-mail data with unicode symbols
	var mailOptions = {
	    from: '"My Makan Place SG" <mymakanplacesg@gmail.com>', // sender address
	    to: 'mymakanplacesg@gmail.com', // list of receivers
	    subject: subject, // Subject line
	    text: text, // plaintext body
	    html: html // html body
	};

	// send mail with defined transport object
	transporter.sendMail(mailOptions, function(error, info){
	    if(error){
	    	return	console.log(error);
	    }
	    return console.log('Email message sent: ' + info.response);
	});

}
