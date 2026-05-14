import React from 'react';
import { Typography, Container, Divider } from '@mui/material';

export default function Lin() {
    return (
        <Container sx={{ mt: 4 }}>
            <Typography variant="h3">LIN</Typography>
            <Typography variant="body1">LIN is a method for solving the last layer of the Rubik's Cube.</Typography>
            <Divider sx={{ my: 2 }} />
            <Typography variant='h5'>DF + CP</Typography>
            <Typography variant="body2">
                Solve the DF edge and corners permutation at the same time.
            </Typography>
            <ul>
                <li>Headlights On Left: <code>1,0 / 2,-1 / 0,-3 / 3,0 / -3,0 / -2,4 /</code></li>
                <li>Headlights On Right: <code>1,0 / 3,0 / 3,-3 / -1,2 / 1,-2 / 3,0 /</code></li>
                <li>Headlights On Front: <code>4,-3 / -3,0 / -1,2 / 1,-2 / -3,3 / -3,0 /</code></li>
                <li>Headlights On Back: <code>0,-1 / 4,-2 / -3,0 / 0,3 / 0,-3 / -1,2 /</code></li>
                <li>No Headlights: <code>1,0 / -4,-3 / -3,0 / -3,-3 / -3,0 / -2,-3 /</code></li>
                <li>Corners Solved*: <code>1,0 / 3,0 / 3,0 / -1,-1 / -2,1 / -3,0 /</code></li>
            </ul>
            <Typography variant="body2">
                *For this case, put unsolved slot on DB and its corresponding edge on UR
            </Typography>
            <Typography variant='h5'>CP</Typography>
            <Typography variant="body2">
                Solve the corner permutation only in case you have solved the entire bottom layer at the last step.
            </Typography>
            <ul>
                <li>Adj Swap: <code>/ 3,-3 / -3,0 / 0,3 / 0,-3 / 0,3 /</code></li>
                <li>Diag Swap: <code>/ -3,-3 / 3,0 / -3,-3 / 3,0 / -3,-3 /</code></li>
            </ul>
            <Typography variant='h5'>EPLL</Typography>
            <Typography variant="body2">
                Edge PLL
            </Typography>
            <ul>
                <li>Ua: <code>1,0 / 0,-3 / -1,0 / 3,0 / 1,0 / 0,3 / -1,0 / -3,0 /</code></li>
                <li>Ub: <code>/ 3,0 / 1,0 / 0,-3 / -1,0 / -3,0 / 1,0 / 0,3 / -1,0</code></li>
                <li>H: <code>1,0 / -1,-1 / -2,1 / -1,-1 / -5,1 / -1,-1 / -2,1 / -1,-1 / 0,1</code></li>
                <li>Z: <code>1,0 / -1,-1 / -2,1 / -1,-1 / 4,1 / -1,-1 / 0,1</code></li>
            </ul>
            <Typography variant='h5'>Parity</Typography>
            <Typography variant="body2">
                This might be the most difficult algorithm of all Rubik's Cube puzzles.
            </Typography>
            <ul>
                <li><code>/ -3,0 / 0,3 / 0,-3 / 0,3 / 2,0 / 0,2 / -2,0 / 4,0 / 0,-2 / 0,2 / -1,4 / 0,-3 / 0,3</code></li>
            </ul>

            <Divider sx={{ my: 2 }} />
            <Typography variant='h5'>External Resource</Typography>
            <ul>
                <li>
                    <a href="https://youtu.be/AfzkX8AQemY?si=KLph2SmA-7W5BepC" target="_blank" rel="noopener noreferrer">
                        Lin Method Tutorial at YouTube
                    </a>
                </li>
            </ul>
        </Container>
    );
}