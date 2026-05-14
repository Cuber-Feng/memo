import React from 'react';
import { Typography, Container, Divider } from '@mui/material';
import Header from '../../components/Header';
import AlgoCard from '../../components/AlgoCard';
import algos from '../../assets/algos/cfop-oll.json'; // JSON 导入

export default function CFOP() {
    return (
        <Container sx={{ mt: 4 }}>
            <Header
                title="CFOP"
                description="PS: Now I only put the algorithms image here, and I will make it better in the future."
            />
            <Typography variant="h5">F2L</Typography>
            <Typography variant="body1">First Two Layers</Typography>
            <Typography variant="h5">OLL</Typography>
            <Typography variant="body1">Orientation of the Last Layer</Typography>

            <Container
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    padding: 0
                }}
            >
                {algos.map((algo, index) => (
                    <AlgoCard
                        _case={algo._case}
                        _type='oll'
                        _size={120}
                        key={index}
                        _note={`${index + 1}`}
                    />
                ))}
            </Container>

            <img src="/memo/oll1.jpg" alt="OLL1" style={{
                width: '100%',
                maxWidth: '800px'
            }} />
            <img src="/memo/oll2.jpg" alt="OLL2" style={{
                width: '100%',
                maxWidth: '800px'
            }} />
            <Typography variant="h5">PLL</Typography>
            <Typography variant="body1">Permutation of the Last Layer</Typography>
            <img src="/memo/pll.jpg" alt="PLL" style={{
                width: '100%',
                maxWidth: '800px'
            }} />
            <Divider sx={{ my: 2 }} />
            <Typography variant='h5'>External Resource</Typography>
            <ul>
                <li>
                    <a href="http://xhslink.com/o/17NOqCK4Jxj" target="_blank" rel="noopener noreferrer">
                        My CFOP algorithm sheet at Rednote
                    </a>
                </li>
            </ul>
        </Container>
    );
}