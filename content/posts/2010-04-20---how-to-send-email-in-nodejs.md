---
title: How to send email in Node.js
date: "2019-05-05T00:55:28.907Z"
template: "post"
draft: false
slug: "/posts/how-to-send-email-in-nodejs"
category: "Node.js"
tags:
  - "node"
  - "server"
  - "express"
  - "email"
  - "nodemailer"

description: "This tutorial will cover to send an email in Node using a 'nodemailer' package"
---

This is second tutorial of Node.js [series](https://3sanket3.com/posts/nodejs-tutorial-series-setup-basic-node-server).

This tutorial will cover:

- How to send email in Node.js
  - Make your email testing easy <sup>PRO Tip</sup>
  - Design nicer email templates quickly <sup>PRO Tip</sup>

Assuming you have basic setup of node.js server, if not please go through previous tutorial of the [series](https://3sanket3.com/posts/nodejs-tutorial-series-setup-basic-node-server).

## Using fake SMTP provider

To send emails, we need an SMTP server, which will help us to send the email. And for the same, we will use a really nice service that makes our email testing way easier called [maintrap.io](https://maintrap.io)

Mailtrap.io is a fake SMTP provider, which send all emails (irrespective of _to_ whom it is sent) into one inbox. So, while developing we don't have to check emails by logging in to the actual email clients. This becomes really handy when multiple emails or users involved in email sending feature.

To get the fake SMTP configuration you can login to mailtrap.io and **Create Inbox** . If you will open inbox it will show you the SMTP config(as shown below) we should use to send all emails to this particular inbox.

![Mailtrap fake SMTP Setting](media/mailtrap-smtp.PNG)

## Sending Email

We will be using a package called [nodemailer](https://nodemailer.com/about/) to send the email. Please install the same using `npm install nodemailer --save` or `yarn add nodemailer`

We can configure it in our `index.js` file as below:

- Import the `nodemailer` package in `index.js` as below

```javasript
...
const nodemailer = require("nodemailer");
...
```

- Create a new endpoint called `/send-email`

```javascript
app.get("/send-email", async (request, response) => {
  try {
    //email sending code will go here
  } catch (e) {
    response.send(`An error occurred while sending email`);
  }
});
```

> Note: The callback function is `async` because we will `await` for the `sendEmail` function(code in upcoming point)

- Create `transport` object that holds the SMTP configuration

```javascript
let transporter = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "30b7d33f3ac774",
    pass: "d75252e55f53d9"
  }
});
```

> Note: Make sure to update these SMTP setting with your actual SMTP providers like [Mailgun](https://www.mailgun.com/), [SendGrid](https://sendgrid.com/) or [MailJet](https://www.mailjet.com/) when you move your code to production

- Create email data and sent the email using `transporter`

```javascript
const emailData = {
  from: "sender@somecompany.com",
  to: "receiver@somecomapny.com",
  subject: "A test email",
  html: "<p> Hi there, this is a test email </p>"
};

// send mail with defined transport object
let info = await transporter.sendMail({
  from: emailData.from,
  to: emailData.to,
  subject: emailData.subject,
  html: emailData.html
});

response.send(`An email successfully sent to ${emailData.to}`);
```

- You can try with any _to_ address, it will send the email to the same mailtrap inbox, as shown below:

![Mailtrap inbox](media/mailtrap-inbox.PNG.PNG)

## The Sandbox

<iframe src="https://codesandbox.io/embed/pyqjlzm390?fontsize=14" title="How to send email in Node.js" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>
