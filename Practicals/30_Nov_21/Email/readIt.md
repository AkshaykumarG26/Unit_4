http - hyper text transfer protocol is used for web communication
smtp - simple mail transfer protocol - using smtp we can send mails from one server to another server

pop3 and imap these are used by email clients 


install nodemailer using - npm install nodemailer


use nodemailer.com most of the code we are using from this

go to smtp and copy single connection code and paste it in mail.js file in configs folder
import nodemialer and then go to mailtrap copy username and pass from credential and paste it in mail.js configuratoin 
export this file using module.exports =  nodemailer.............



go to msg config on nodemailer 

and copy this 
var message = {
  from: "sender@server.com",
  to: "receiver@sender.com",
  subject: "Message title",
  text: "Plaintext version of the message",
  html: "<p>HTML version of the message</p>"
};


and paste it in controller file in post section



install dotenv - npm install dotenv for the env file