require('dotenv').config();
const emailUser = process.env.EMAIL_USER;
const emailPass = process.env.EMAIL_PASS;

const express = require('express');
const app = express();
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: emailUser,
        pass: emailPass,
    }
});

app.post('/send', (req, res) => {
    const nombre = req.body.nombre;
    const email = req.body.email;
    const mensaje = req.body.mensaje;

    const mailOptions = {
        from: email,
        to: 'msfurcogaitan@gmail.com', // Reemplazar con tu correo
        subject: 'Mensaje de contacto',
        html: `<p><b>Nombre:</b> ${nombre}</p>
            <p><b>Email:</b> ${email}</p>
            <p><b>Mensaje:</b> ${mensaje}</p>`
    };

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log(error);
        res.send({ success: false });
    } else {
        console.log('Email enviado: ' + info.response);
        res.send({ success: true });
    }
    });
});

app.listen(3000, () => {
    console.log('Servidor iniciado en puerto 3000');
});
