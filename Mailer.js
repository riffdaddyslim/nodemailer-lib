import nodemailer from "nodemailer"

class Mailer {
    constructor(email, pass) {
        this.email = email

        this.transporter = nodemailer.createTransport({
            service: "gmail",
            auth: { user: this.email, pass }
        })
    }

    sendEmail(to, subject, text) {
        this.transporter.sendMail({
            email: this.email,
            to,
            subject,
            text
        })
    }
}

export default Mailer