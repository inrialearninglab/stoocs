import nodemailer from 'nodemailer';

export async function sendMail(html: string, email: string, subject: string) {
    let transporter = nodemailer.createTransport({
        // @ts-ignore
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: 'plain',
    });

    let mailOptions = {
        from: `Stoocs <${process.env.APP_EMAIL}>`,
        to: email,
        subject,
        html,
    };

    try {
        let info = await transporter.sendMail(mailOptions);
    } catch (error) {
        throw Error('mailer error');
    }
}
