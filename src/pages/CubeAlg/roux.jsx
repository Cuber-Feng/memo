import React, { useState } from 'react';
import { Typography, Container, Divider, Button, Box } from '@mui/material';
import Header from '../../components/Header';
import AlgoCard from '../../components/AlgoCard';
import cmllalgo from '../../assets/algos/roux-cmll.json';

export default function ROUX() {
    const [activeTab, setActiveTab] = useState('o');
    return (
        <Container sx={{ mt: 4 }}>
            <Header
                title="ROUX"
                description="Desk is essential for the ROUX method (one-handed)."
            />
            <Typography variant="h6" align='center'>CMLL(OH)</Typography>
            <Box sx={{ display: 'flex', gap: 1, mb: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
                <Button
                    variant={activeTab === 'o' ? 'contained' : 'outlined'}
                    onClick={() => setActiveTab('o')}
                >
                    O
                </Button>
                <Button
                    variant={activeTab === 'h' ? 'contained' : 'outlined'}
                    onClick={() => setActiveTab('h')}
                >
                    H
                </Button>
                <Button
                    variant={activeTab === 'pi' ? 'contained' : 'outlined'}
                    onClick={() => setActiveTab('pi')}
                >
                    Pi
                </Button>
                <Button
                    variant={activeTab === 'u' ? 'contained' : 'outlined'}
                    onClick={() => setActiveTab('u')}
                >
                    U
                </Button>
                <Button
                    variant={activeTab === 't' ? 'contained' : 'outlined'}
                    onClick={() => setActiveTab('t')}
                >
                    T
                </Button>
                <Button
                    variant={activeTab === 'l' ? 'contained' : 'outlined'}
                    onClick={() => setActiveTab('l')}
                >
                    L
                </Button>
                <Button
                    variant={activeTab === 's' ? 'contained' : 'outlined'}
                    onClick={() => setActiveTab('s')}
                >
                    S
                </Button>
                <Button
                    variant={activeTab === 'as' ? 'contained' : 'outlined'}
                    onClick={() => setActiveTab('as')}
                >
                    As
                </Button>
            </Box>

            {
                <Container
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        padding: 0
                    }}
                >
                    {cmllalgo.map((algo, index) =>
                        algo._type === activeTab &&
                        (
                            <AlgoCard
                                _case={algo._case}
                                _stage='cmll'
                                _view='plan'
                                _size={80}
                                key={index}
                                _note={algo._note}
                            />
                        ))}
                </Container>

            }



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