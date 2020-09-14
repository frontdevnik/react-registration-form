import React from 'react';

export const stubRegistrationInfoProps = {
    handleSubmit: jest.fn(),
};

export const defaultValue = 'default value';

export const registrationInfoLinks = [
    {
        name: 'birthday',
        type: 'text',
        placeholder: 'Input birthday',
        className: 'timepicker',
    },
    {
        name: 'lunchtime',
        type: 'text',
        placeholder: 'Choose lunchtime',
        className: 'timepicker',
    },
];
