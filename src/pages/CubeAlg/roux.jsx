import React from 'react';
import { Typography, Container, Divider } from '@mui/material';
import Header from '../../components/Header';

export default function ROUX() {
    return (
        <Container sx={{ mt: 4 }}>
            <Header 
                title="ROUX"
                description="Desk is essential for the ROUX method (one-handed)."
            />
            <Typography variant="h5">CMLL(OH)</Typography>
            <Typography variant="body1">Permutation of the Last Layer</Typography>
            <Divider sx={{ my: 2 }} />
            <Typography variant='h5'>External Resource</Typography>
            <ul>
                <li>
                    <a href="https://sites.google.com/view/kianroux/oh-cmll" target="_blank" rel="noopener noreferrer">
                        Roux Method Guide by Kian
                    </a>
                </li>
            </ul>
        </Container>
    );
}