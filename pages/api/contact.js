// eslint-disable-next-line import/no-anonymous-default-export
export default function (req, res) {
    require('dotenv').config()
    const nodemailer = require('nodemailer');
    const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
          user: 'demo@demo.gmail',
          pass: 'password',
        },
        secure: true,});

        const mailData = {
            from: 'demo@demo.com',
            to: 'your email',
            subject: `Message From ${req.body.name}`,
            text: req.body.message,
            html: <div>{req.body.message}</div>
        }

        transporter.sendMail(mailData, (err, info) => {
            if (err) {
                console.log(err)
                res.send(err)
            } else {
                console.log(info)
                res.send(info)
            }
        })

        res.status(200)
}