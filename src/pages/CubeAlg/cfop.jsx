import React from 'react';
import { Typography, Container, Divider } from '@mui/material';

export default function CFOP() {
    return (
        <Container sx={{ mt: 4 }}>
            <Typography variant="h3">CFOP</Typography>
            <Typography variant="body1">This is a simple implementation of the CFOP method for solving the Rubik's Cube.</Typography>
            <Divider sx={{ my: 2 }} />
            <Typography variant="h5">F2L</Typography>
            <Typography variant="body1">First Two Layers</Typography>
            <Typography variant="h5">OLL</Typography>
            <Typography variant="body1">Orientation of the Last Layer</Typography>
            <Typography variant="h5">PLL</Typography>
            <Typography variant="body1">Permutation of the Last Layer</Typography>

        </Container>
    );
}