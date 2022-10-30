import styles from '../../styles/Dialog.module.css';

import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

import React, { useState } from 'react';

import Form from './Form';
import { iData } from './validateInfo';

interface props {
    onChange: () => void;
    open: boolean;
};


const ContactDialog = ({ open, onChange }: props) => {
    function handleClick(): void {
        onChange();
    };


    return (
        <div>
            <Dialog
            className={styles['contac__dialog']}
                onClose={() => handleClick()}
                open={open}
            >
                <DialogTitle>
                    <IconButton
                        sx={{ color: 'rgba(0, 0, 0, 0.54)' }}
                        onClick={() => handleClick()}
                    >
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>

                <DialogContent dividers>
                    <Form />
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default ContactDialog;