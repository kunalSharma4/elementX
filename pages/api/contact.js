// pages/api/contact.js

import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).end(); // Method Not Allowed
    }

    const { name, email, message } = req.body;

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: "kunal04051999@gmail.com",
            pass: "bati ijop kmpd wxur", // Use an App Password if you have 2-factor authentication enabled
        },
    });
    try {
        await transporter.sendMail({
            from: email,
            to: 'sharma.kunal.ks12345@gmail.com',
            subject: `New message from ${name}`,
            text: `You have received a message from ${email}. Message - ${message}`
        });

        return res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error('Error sending email:', error);
        return res.status(500).json({ error: 'An error occurred while sending the email' });
    }
}
