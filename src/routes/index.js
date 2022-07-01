const { Router} = require('express');
const nodemailer = require('nodemailer');
const router = Router();


router.post('/send-email', (req,res) => {
    const {nombre_completo, correo, telefono, asunto, mensaje} = req.body;

    contentHTML = `
        <h1>Informacion del Contacto</h1>
        <ul>
            <li>Nombre: ${nombre_completo}</li>
            <li>Correo: ${correo}</li>
            <li>Telefono: ${telefono}</li>
            <li>Asunto: ${asunto}</li>
        </ul>
        <p> ${mensaje}</p>
    `
    nodemailer.createTransport({
        host: '',
        port:,
        secure:,
        auth:{
            user: '',
            
        }
    })


    res.send('recibido');
});

module.exports = router;