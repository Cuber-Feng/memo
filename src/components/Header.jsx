import React from 'react';
import { Typography, Container, Divider } from '@mui/material';

export default function Header({ title, description }) {
    return (
        <>
            <Typography
                variant="h3"
                sx={{ textAlign: 'center', color: 'primary.mainText' }}
            >
                {title}
            </Typography>
            <Typography
                variant="body1"
                sx={{ textAlign: 'center', color: 'primary.main' }}
            >
                {description}
            </Typography>
            <Divider sx={{ my: 2 }} />
        </>
    );
}