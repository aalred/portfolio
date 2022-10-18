import styles from '../../styles/Dialog.module.css';

import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import InfoIcon from '@mui/icons-material/Info';

import React, { useState } from 'react';

import { iProject } from '../../Interfaces';

const DialogAlert = ({ title, summary, technologies, infoAditional }: iProject) => {
    const [open, setOpen] = useState(false);

    function handleClick(): void {
        setOpen(!open);
    };

    return (
        <div>
            <div>
                <IconButton
                    sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                    onClick={() => handleClick()}
                >
                    <InfoIcon />
                </IconButton>
            </div>
            <div>
                <Dialog
                    className={styles.dialog}
                    onClose={() => handleClick()}
                    open={open}
                >

                    <DialogTitle className={styles['dialog__title']}>
                        <div>
                            {title}
                        </div>
                        <IconButton
                            className={styles['dialog__btn']}
                            sx={{ color: 'rgba(0, 0, 0, 0.54)' }}
                            onClick={() => handleClick()}
                        >
                            <CloseIcon />
                        </IconButton>
                    </DialogTitle>
                    <DialogContent dividers>
                        <Typography gutterBottom>
                            {summary}
                        </Typography>
                        <Typography gutterBottom>
                            <h4>Technologies:</h4> {technologies.join(', ')}
                        </Typography>
                        <Typography gutterBottom>
                            {infoAditional}
                        </Typography>
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    )
}

export default DialogAlert;