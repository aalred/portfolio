interface iValidation {
    mail: (data: any) => boolean;
};

export interface iData {
    mail: string;
    name: string;
    message: string;
};

export interface iErrors {
    mail: boolean;
    name: boolean;
    message: boolean;
};

export const validate: iValidation = {
    mail: (data) => {
        return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(data.value);
    },
};

export const form: iData = {
    mail: '',
    name: '',
    message: '',
};

export const errors: iErrors = {
    mail: false,
    name: false,
    message: false,
};