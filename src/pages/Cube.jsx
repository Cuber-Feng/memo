import React from 'react';
import { Typography, Container, Box } from '@mui/material';
import HeroCard from '../components/HeroCard';

export default function Cube() {
    return (
        <Container sx={{ mt: 4 }}>
            <Typography variant="h3">Rubik's Cube</Typography>
            <Typography>When you forget the algorithms...</Typography>
            <Container sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'left' }}>
                <HeroCard title="CFOP" description="F2L, OLL, PLL (119 algorithms)" to="/CubeAlg/cfop" />
                <HeroCard title="ROUX(OH)" description="CMLL (42 algorithms)" to="/CubeAlg/roux" />
                <HeroCard title="Blindfolded" description="彳亍 (8+18 algorithms)" to="about:blank" />
                <HeroCard title="Big Cubes" description="Pariety, L4E" to="about:blank" />
                <HeroCard title="Pyraminx" description="4-Edge Method" to="about:blank" />
                <HeroCard title="Megaminx" description="Last Layer" to="about:blank" />
                <HeroCard title="Skewb" description="控心法" to="about:blank" />
                <HeroCard title="Square-1" description="Lin Method" to="/CubeAlg/lin" />
            </Container>
        </Container>
    );
}