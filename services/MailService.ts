import keys from "../config/env/keys";

const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(keys.sendgridKey);

export const sendMailSengrid = async (email, link) => {
    try {
        await sgMail.send({
            to: email,
            from: keys.sendgridEmail,
            subject: "Document Signing",
            html: `<p>You are assigned to sign a document.<br>Click the <a href="${link}">Link</a> to continue.</p>`,
        });
    } catch (error) {
        console.error(error);
        if (error.response) {
            console.error(error.response.body);
        }
    }
};

export const sendMailService = async (email, link) => {
    try {
        await sendMailSengrid(email, link);
    } catch (error) {
        console.error(error);
        if (error.response) {
            console.error(error.response.body);
        }
    }
};
