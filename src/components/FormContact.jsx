import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import SendIcon from '@mui/icons-material/Send';
function FormContact() {
    const form = useRef();
    const btn = document.getElementById('contact-btn');
    const sendEmail = (e) => {
        e.preventDefault();
        btn.text = 'Sending...';
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const message = document.getElementById('message');
        btn.setAttribute('disabled', true);
        if (name.value !== '' || email.value !== '' || message !== '') {
            emailjs.sendForm('service_vhaba8s', 'template_hfrdtxs', form.current, '9ROh7b-rJGLYC6Ovp')
                .then((result) => {
                    alert('Delivered!');
                    console.log(result.text);
                    name.value = '';
                    email.value = '';
                    message.value = '';
                    btn.text = 'Send';
                }, (error) => {
                    alert('Failed!');
                    console.log(error.text);
                    btn.text = 'Send';
                    btn.setAttribute('disabled', false);
                });
        } else {
            alert('Please Fill Up the Following')
        }
    };

    return (
        <Paper elevation={3} sx={{ p: 3, margin: '1rem auto', border: '1px solid #212121' }}>
            <form ref={form} onSubmit={sendEmail}>
                <Stack direction='column' spacing={1}>
                    <TextField required id="name" type='text' name='from_name' label="Name" variant="standard" />
                    <TextField required id="email" name='from_email' type='email' label="Email" variant="standard" />
                    <TextField
                        required
                        id="message"
                        label="Message"
                        name="message"
                        multiline
                        maxRows={4}
                        rows={4}
                        variant="standard"
                    />
                    <Button type='submit' id='contact-btn' variant="contained" endIcon={<SendIcon />}>
                        Send
                    </Button>
                </Stack>
            </form>
        </Paper>
    );
}

export default FormContact