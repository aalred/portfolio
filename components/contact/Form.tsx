import styles from '../../styles/Dialog.module.css';

import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send';
import Alert from '@mui/material/Alert';

import emailjs from '@emailjs/browser';
import React, { useState, useEffect } from 'react';

import { form, validate, errors } from './validateInfo';

const email = {
    key: process.env.NEXT_PUBLIC_KEY + '',
    template: process.env.NEXT_PUBLIC_TEMPLATE + '',
    service: process.env.NEXT_PUBLIC_SERVICE + '',
};

const Form = () => {
    const [dataValidate, setIsValidated] = useState(false),
        [data, setData] = useState(form),
        [validated, setValidate] = useState(errors),
        [isWrite, setWrite] = useState(false),
        [open, setOpen] = useState(false);

    function handleClick(): void {
        var templateParams = {
            name: data.name,
            email: data.mail,
            message: data.message,
        };
        setData(form);
        setIsValidated(false);
        emailjs.send(email.service, email.template, templateParams, email.key)
            .then(function () {
                setOpen(!open);
            }, function (error) {
                console.log('FAILED...', error);
            });

    };

    function handleChange(e: any) {
        let value: boolean;
        if (e.target.id === 'mail') {
            setValidate({ ...validated, mail: validate.mail(e.target) });
            setData({ ...data, mail: e.target.value });
        } else if (e.target.id === 'name') {
            value = e.target.value.trim() ? true : false;
            setValidate({ ...validated, name: value });
            setData({ ...data, name: e.target.value });
        } else if (e.target.id === 'message') {
            value = e.target.value.trim() ? true : false;
            setValidate({ ...validated, message: value });
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

    useEffect(() => {
        if (data.mail.trim() && !validated.mail) {
            setWrite(true);
        } else {
            setWrite(false);
        }
    }, [data.mail]);


    return (
        <div>
            <div>
                <FormControl component="fieldset" onChange={(e: any) => handleChange(e)}>
                    <FormGroup >
                        <div className={styles['contact__field']}>
                            <TextField
                                error={isWrite}
                                required
                                id="mail"
                                label="Mail Contact"
                                value={data.mail}
                            />
                        </div>
                        <div className={styles['contact__field']}>
                            <TextField
                                required
                                id="name"
                                label="Name"
                                value={data.name}
                            />
                        </div>
                        <div className={styles['contact__field']}>
                            <TextField
                                required
                                id="message"
                                label="Message"
                                value={data.message}
                            />
                        </div>
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