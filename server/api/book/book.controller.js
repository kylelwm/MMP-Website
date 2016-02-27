/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/books              ->  index
 */

'use strict';

//import config from './config/environment';
var config = require('./../../config/local.env');

// DateFormatter
var dateFormat = require('dateformat');

// Gets a list of Books
export function index(req, res) {
  res.json([]);
}

// Sends an email for the booking
export function bookingEmail(req, res) {

	var data = req.body
	console.log(data);

	if(verifyBookingForm(data)) {
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

function verifyBookingForm(data) {
	if(!data.date) {
		console.log('Date');
		return false;
	} else if(!data.email) {
		console.log('Email');
		return false;
	} else if(!data.name) {
		console.log('Name');
		return false;
	} else if(!data.number) {
		console.log('Number');
		return false;
	} else if(!data.pax) {
		console.log('Pax');
		return false;
	} else if(!data.time) {
		console.log('Time');
		return false;
	} else if(!data.timestamp) {
		console.log('Timestamp');
		return false;
	} else {
		return true;
	}
}

function buildSubject(data) {
	return 'New reservation from ' + data.name + ' received on ' + formatDate(data.timestamp);
}

function buildText(data) {
	var text = '<h4>New booking</h4>' +
		'<div><b>Name: </b>' + data.name + '</div><br>' + 
		'<div><b>Number: </b>' + data.number + '</div><br>' + 
		'<div><b>Email: </b>' + data.email + '</div><br>' + 
		'<div><b>Date: </b>' + formatDate(data.date) + '</div><br>' +
		'<div><b>Time: </b>' + data.time + '</div><br>' +
		'<div><b>Pax: </b>' + data.pax + '</div>';

	if(data.message) {
		text += '<br><div><b>Message: </b>' + data.message + '</div>';
	}

	return text;
}

function buildHtml(data) {
	var html = '<h4>New booking</h4>' +
		'<div><b>Name: </b>' + data.name + '</div><br>' + 
		'<div><b>Phone: </b>' + data.number + '</div><br>' + 
		'<div><b>Email: </b>' + data.email + '</div><br>' + 
		'<div><b>Date: </b>' + formatDate(data.date) + '</div><br>' +
		'<div><b>Time: </b>' + data.time + '</div><br>' +
		'<div><b>Pax: </b>' + data.pax + '</div>';

	if(data.message) {
		html += '<br><div><b>Message: </b>' + data.message + '</div>';
	}

	return html;
}

function formatDate(date) {
	//Eg: 1st January, 1970
	return dateFormat(date, "dS mmmm, yyyy");
}

function sendEmailToSelf(subject, text, html) {


	var nodemailer = require('nodemailer');

	// create reusable transporter object using the default SMTP transport
	var transporter = nodemailer.createTransport('smtps://' + config.EMAIL_USER + 
		'%40gmail.com:' + config.EMAIL_PASSWORD + '@smtp.gmail.com');

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
