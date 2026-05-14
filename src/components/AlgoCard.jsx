import React, { useState } from 'react';
import { Card, CardContent, CardActionArea, Typography, Button, CardActions } from '@mui/material'

export default function AlgoCard({ _case, _type, _size = 128, _note = '' }) {
    return (
        <Card sx={{
            m: 2,
            width: _size + 32, // 32 is the padding of CardContent'
            padding: 0,
        }}>
            <CardContent>
                <Typography variant="h6" align='center'>
                    {_note}
                </Typography>
                <img
                    src={`https://api.cuberoot.me/v1/visualcube.svg?case=${_case}&view=${_type}&size=${_size}`}
                />
                <Typography variant='body1' align='center'>
                    {_case}
                </Typography>
            </CardContent>

        </Card>
    )
}