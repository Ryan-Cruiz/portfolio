import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import SendIcon from '@mui/icons-material/Send';
import CircularProgress from '@mui/material/CircularProgress';
import { useState } from 'react';
function FormContact() {
    const form = useRef();
    const [isSending,setSend] = useState(false);
    const sendEmail = (e) => {
        e.preventDefault();
        const btn = document.getElementById('contact-btn');
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const message = document.getElementById('message');
        if (name.value !== '' || email.value !== '' || message !== '') {
            setSend(prev => !prev);
            btn.setAttribute('disabled','');
            // alert('hey');
            emailjs.sendForm('service_vhaba8s', 'template_hfrdtxs', form.current, '9ROh7b-rJGLYC6Ovp')
                .then((result) => {
                    alert('Delivered!');
                    console.log(result.text);
                    name.value = '';
                    email.value = '';
                    message.value = '';
                    setSend(prev => !prev);
                    btn.removeAttribute('disabled');
                }, (error) => {
                    alert('Failed!');
                    console.log(error.text);
                    setSend(prev => !prev);
                    btnText.removeAttribute('disabled');
                });
        } else {
            setSend(prev => !prev);
            btnText.removeAttribute('disabled');
            alert('Please Fill Up the Following')
        }
    };

    return (
        <Paper elevation={3} sx={{ p: 3, margin: '1rem auto', border: '1px solid #212121' }}>
            <Typography variant='body1'>If you have any question or want to reach me fill this up:</Typography>
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
                    <Button id='contact-btn' type='submit' variant="contained" endIcon={isSending ?  <CircularProgress color="secondary" size={15} /> : <SendIcon />}>
                        {isSending ? 'Sending' : 'Send' }
                    </Button>
                </Stack>
            </form>
        </Paper>
    );
}

export default FormContact