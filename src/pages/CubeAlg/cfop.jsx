import React, { useState } from 'react';
import { Typography, Container, Divider, Box, Button } from '@mui/material';
import Header from '../../components/Header';
import AlgoCard from '../../components/AlgoCard';
import ollalgo from '../../assets/algos/cfop-oll.json';
import pllalgo from '../../assets/algos/cfop-pll.json';

export default function CFOP() {
    const [activeTab, setActiveTab] = useState('oll');

    return (
        <Container sx={{ mt: 4 }}>
            <Header
                title="CFOP"
                description="PS: Now I only put the algorithms image here, and I will make it better in the future."
            />

            <Box sx={{ display: 'flex', gap: 1, mb: 2, justifyContent: 'center' }}>
                <Button
                    variant={activeTab === 'oll' ? 'contained' : 'outlined'}
                    onClick={() => setActiveTab('oll')}
                >
                    OLL
                </Button>
                <Button
                    variant={activeTab === 'pll' ? 'contained' : 'outlined'}
                    onClick={() => setActiveTab('pll')}
                >
                    PLL
                </Button>
            </Box>

            {
                activeTab === 'oll' && (
                    <>
                        <Typography variant="h6" align='center'>Orientation of the Last Layer</Typography>
                        <Container
                            sx={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                justifyContent: 'center',
                                padding: 0
                            }}
                        >
                            {ollalgo.map((algo, index) => (
                                <AlgoCard
                                    _case={algo._case}
                                    _stage='oll'
                                    _view='plan'
                                    _size={80}
                                    key={index}
                                    _note={`${index + 1}`}
                                />
                            ))}
                        </Container>
                        <img src="/memo/oll1.jpg" alt="OLL1" style={{
                            width: '100%',
                            maxWidth: '800px',
                        }} />
                        <img src="/memo/oll2.jpg" alt="OLL2" style={{
                            width: '100%',
                            maxWidth: '800px'
                        }} />
                    </>
                )
            }

            {
                activeTab === 'pll' && (
                    <>
                        <Typography variant="h6" align='center'>Permutation of the Last Layer</Typography>
                        <Container
                            sx={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                justifyContent: 'center',
                                padding: 0
                            }}
                        >
                            {pllalgo.map((algo, index) => (
                                <AlgoCard
                                    _case={algo._case}
                                    _stage='pll'
                                    _view='plan'
                                    _size={80}
                                    key={index}
                                    _note={algo._name}
                                />
                            ))}
                        </Container>
                        <img src="/memo/pll.jpg" alt="PLL" style={{
                            width: '100%',
                            maxWidth: '800px'
                        }} />
                    </>
                )
            }

            <Divider sx={{ my: 2 }} />
            <Typography variant='h5'>External Resource</Typography>
            <ul>
                <li>
                    <a href="http://xhslink.com/o/17NOqCK4Jxj" target="_blank" rel="noopener noreferrer">
                        My CFOP algorithm sheet at Rednote
                    </a>
                </li>
                <li>
                    <a href="https://visualcube.api.cubing.net/" target="_blank" rel="noopener noreferrer">
                        VisualCube API
                    </a>
                </li>
            </ul>
        </Container>
    );
}