import React, { useState } from 'react';
import { Card, CardContent, CardActionArea, Typography, Button, CardActions } from '@mui/material'

export default function AlgoCard({ _case, _stage, _view, _size = 80, _note = '', _puzzle = '3' }) {
    return (
        <Card sx={{
            m: 2,
            width: { xs: '100%', sm: 150 },
            // width: _size + 32, // 32 is the padding of CardContent'
            padding: 0,
        }}>
            <CardContent sx={{
                display: 'flex',
                flexDirection: { xs: 'row', sm: 'column' },
                alignItems: 'center',
                gap: { xs: '1rem', sm: '0rem' }, 
                padding: '5 5 5 5',
                margin: 0,
            }}>
                <Typography variant="h6" align='center'>
                    {_note}
                </Typography>
                <img
                    src={`https://visualcube.api.cubing.net/visualcube.php?fmt=svg&size=${_size}&pzl=${_puzzle}&case=${_case}&stage=${_stage}&bg=t&view=${_view}`}

                />
                <Typography variant='body1' align='center'>
                    {_case}
                </Typography>
            </CardContent>

        </Card>
    )
}