import React, { useState } from 'react';
import { Typography, Container, Divider, Box, Button, colors } from '@mui/material';
import Header from '../../components/Header';
import AlgoCard from '../../components/AlgoCard';
import ollalgo from '../../assets/algos/cfop-oll.json';
import pllalgo from '../../assets/algos/cfop-pll.json';

export default function CFOP() {
    const [activeTab, setActiveTab] = useState('oll');
    const [ollType, setOllType] = useState('dot'); // 'all', 'edge', 'corner'

    return (
        <Container sx={{ mt: 4 }}>
            <Header
                title="CFOP"
                description="The most popular method for speed cubing."
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

                        <Box sx={{ display: 'flex', gap: 1, mb: 2, justifyContent: 'center' }}>
                            <Button
                                variant={ollType === 'dot' ? 'contained' : 'outlined'}
                                onClick={() => setOllType('dot')}
                                sx={{
                                    bgcolor: 'secondary.main',
                                    color: 'white',
                                    '&.MuiButton-outlined': {
                                        bgcolor: 'transparent',
                                        color: 'secondary.main',
                                    },
                                    textTransform: 'none'
                                }}
                            >
                                Dot
                            </Button>
                            <Button
                                variant={ollType === 'l' ? 'contained' : 'outlined'}
                                onClick={() => setOllType('l')}
                                sx={{
                                    bgcolor: 'secondary.main',
                                    color: 'white',
                                    '&.MuiButton-outlined': {
                                        bgcolor: 'transparent',
                                        color: 'secondary.main',
                                    },
                                    textTransform: 'none'
                                }}
                            >
                                L
                            </Button>
                            <Button
                                variant={ollType === 'line' ? 'contained' : 'outlined'}
                                onClick={() => setOllType('line')}
                                sx={{
                                    bgcolor: 'secondary.main',
                                    color: 'white',
                                    '&.MuiButton-outlined': {
                                        bgcolor: 'transparent',
                                        color: 'secondary.main',
                                    },
                                    textTransform: 'none'
                                }}
                            >
                                Line
                            </Button>
                            <Button
                                variant={ollType === 'cross' ? 'contained' : 'outlined'}
                                onClick={() => setOllType('cross')}
                                sx={{
                                    bgcolor: 'secondary.main',
                                    color: 'white',
                                    '&.MuiButton-outlined': {
                                        bgcolor: 'transparent',
                                        color: 'secondary.main',
                                    },
                                    textTransform: 'none'
                                }}
                            >
                                Cross
                            </Button>

                        </Box>

                        <Container
                            sx={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                justifyContent: 'center',
                                padding: 0
                            }}
                        >
                            {ollalgo.map((algo, index) =>
                                algo._type === ollType &&
                                (
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