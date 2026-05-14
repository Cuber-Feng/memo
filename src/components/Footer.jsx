// src/components/Footer.jsx
import React from 'react';
import { Box, Typography, Link, Divider } from '@mui/material';

export default function Footer() {
    return (
        <>
            <Box sx={{ height: '100px' }} />
            <Box
                component="footer"
                sx={{
                    position: 'fixed',
                    bottom: 0,
                    width: '100%',
                    bgcolor: 'primary.main',
                    color: 'white',
                    py: 2,
                    textAlign: 'center',
                }}
            >
                <Typography variant="body2">
                    寧鳴而死，不默而生
                </Typography>
                <Typography variant="body2">
                    &copy; {new Date().getFullYear()} Cody Feng. All rights reserved.
                </Typography>
            </Box>
        </>
    );
}