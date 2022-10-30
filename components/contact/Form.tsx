import styles from '../../styles/Dialog.module.css';

import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send';
import Alert from '@mui/material/Alert';

import emailjs from '@emailjs/browser';
import React, { useState, useEffect } from 'react';

import { form, validate, iData, errors } from './validateInfo';

interface props {
    onChange: (data: iData) => void;
    event: boolean;
    onSubmit: () => void;
};

const Form = () => {
    const [dataValidate, setIsValidated] = useState(false),
        [data, setData] = useState(form),
        [validated, setValidate] = useState(errors),
        [open, setOpen] = useState(false);

    function handleClick(): void {
        var templateParams = {
            name: data.name,
            email: data.mail,
            message: data.message,
        };
        setData(form);
        setIsValidated(false);
        emailjs.send('service_0qd1vyt', 'template_pzvds7a', templateParams, 'K02efu2TSJaGItKei')
            .then(function () {
                setOpen(!open);
            }, function (error) {
                console.log('FAILED...', error);
            });

    };


    function handleChange(e: any) {
        if (e.target.id === 'mail') {
            setValidate({ ...validated, mail: validate.mail(e.target) });
            setData({ ...data, mail: e.target.value });
        } else if (e.target.id === 'name') {
            if (e.target.value.trim()) {
                setValidate({ ...validated, name: true });
            } else {
                setValidate({ ...validated, name: false });
            }
            setData({ ...data, name: e.target.value });
        } else if (e.target.id === 'message') {
            if (e.target.value.trim()) {
                setValidate({ ...validated, message: true });
            } else {
                setValidate({ ...validated, message: false });
            }
            setData({ ...data, message: e.target.value });
        }
    };

    useEffect(() => {
        if (validated.mail && validated.message && validated.name) {
            setIsValidated(true);
        } else {
            setIsValidated(false);
        }
    }, [validated]);


    return (
        <div>
            <div>
                <FormControl component="fieldset" onChange={(e: any) => handleChange(e)}>
                    <FormGroup >
                        <TextField
                            className={styles['contact__field']}
                            required
                            id="mail"
                            label="Mail Contact"
                            value={data.mail}
                        />
                        <TextField
                            className={styles['contact__field']}
                            required
                            id="name"
                            label="Name"
                            value={data.name}
                        />
                        <TextField
                            className={styles['contact__field']}
                            required
                            multiline
                            maxRows={4}
                            id="message"
                            label="Message"
                            value={data.message}
                        />
                    </FormGroup>
                </FormControl>
            </div>
            {open ?
                (<Alert
                    onClose={() => handleClick()}>
                    message sent successfully!
                </Alert>)
                : (<IconButton
                    className={styles['dialog__btn']}
                    sx={{ color: 'rgba(0, 0, 0)' }}
                    onClick={() => handleClick()}
                    disabled={!dataValidate}
                >
                    <SendIcon />
                </IconButton>)
            }

        </div>
    )
};

export default Form;