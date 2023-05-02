const nodemailer = require("nodemailer");


export default async function contact(req, res) {
    const {name, email, subject, message} = req.body;

    if (req.method === "POST") {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD
            }
        });

        const mailOptions = {
            from: `"Portfolio Bot" <${process.env.EMAIL}>`,
            to: "aquibmahmood1637@gmail.com",
            replyTo: email,
            subject: subject,
            text: `<sent from: ${name} - (${email})>\n\n${message}`
        }

        try {
            const sentMail = await transporter.sendMail(mailOptions);
            console.log("Email sent: " + sentMail.response);
            res.status(200).json({message: 'Email sent: ' + sentMail.response});
        } catch (err) {
            console.log(error);
            res.status(500).json({message: err});
        }
        
        
    } else {
        res.status(400).json({message: "Path does not exist"});
    }
}