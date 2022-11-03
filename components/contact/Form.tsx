import styles from '../../styles/Dialog.module.css';

import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send';
import Alert from '@mui/material/Alert';

import emailjs from '@emailjs/browser';
import React, { useState, useEffect } from 'react';
import { env } from 'process';

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
        emailjs.send('', '', templateParams, env.NEXT_PUBLIC_KEY)
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
        console.log(env);
    }, [validated]);


    return (
        <div>
            <div>
                <FormControl component="fieldset" onChange={(e: any) => handleChange(e)}>
                    <FormGroup >
                        <div className={styles['contact__field']}>
                            <TextField
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
                                multiline
                                maxRows={4}
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