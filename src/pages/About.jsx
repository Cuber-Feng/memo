import React from 'react';
import { Typography, Container, Divider } from '@mui/material';
import Header from '../components/Header';

export default function About() {
    return (
        <Container sx={{ mt: 4 }}>
            <Header
                title="About"
                description="This website is made for cubers. When you suddenly forget the algorithms, you can find them here."
            />
            <Typography variant="h4">Contact</Typography>
            <Typography variant="body1">If you have any suggestions, please contact me at <a href="mailto:feng.cody@yahoo.com">feng.cody@yahoo.com</a></Typography>
            <Typography variant="body1">Besides, my WCA ID is <a href="https://www.worldcubeassociation.org/persons/2017FENG35" target="_blank" rel="noopener noreferrer">2017FENG35</a>, and
                you can also follow my Instagram <a href="https://www.instagram.com/cuber_feng/" target="_blank" rel="noopener noreferrer">@cuber_feng</a> and
                YouTube channel <a href="https://www.youtube.com/@2017FENG" target="_blank" rel="noopener noreferrer">@2017FENG</a> for more content.
            </Typography>
        </Container>
    );
}