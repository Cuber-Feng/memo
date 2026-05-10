import React from 'react';
import { Typography, Container } from '@mui/material';
import HeroCard from '../components/HeroCard';

export default function Cube() {
    return (
        <Container sx={{ mt: 4 }}>
            <Typography variant="h3">Rubik's Cube</Typography>
            <Typography>When you forget the algorithms...</Typography>
            <Container sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'left' }}>
                <HeroCard title="CFOP" description="119 algorithms" to="/CubeAlg/cfop"/>
                <HeroCard title="ROUX(OH)" description="CMLL" to="https://sites.google.com/view/kianroux/oh-cmll"/>
                <HeroCard title="Blindfolded" description="彳亍" to="about:blank"/>
                <HeroCard title="Big Cubes" description="Pariety, L4E" to="about:blank"/>
                <HeroCard title="Pyraminx" description="4-Edge Method" to="about:blank"/>
                <HeroCard title="Megaminx" description="Last Layer" to="about:blank"/>
                <HeroCard title="Skewb" description="控心法" to="about:blank"/>
                <HeroCard title="Square-1" description="Lin Method" to="about:blank"/>
            </Container>
        </Container>
    );
}