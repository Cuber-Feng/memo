import React from 'react'
import { Card, CardContent, Typography, Button, CardActions } from '@mui/material'
import { Link as RouterLink, useNavigate } from 'react-router-dom';

export default function HeroCard({ title, description, to }) {
    const navigate = useNavigate();

    const isExternal = to.startsWith('http');

    const handleClick = () => {
        if (!isExternal) {
            navigate(to); // internal route
        }
        // else do nothing, external is handled by href
    };
    return (
        <Card sx={{ maxWidth: 345, m: 2 }}>
            <CardContent>
                <Typography variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
            <CardActions>
                {isExternal ? (
                    <Button
                        size="small"
                        href={to}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn More
                    </Button>
                ) : (
                    <Button size="small" onClick={handleClick}>
                        Learn More
                    </Button>
                )}
            </CardActions>
        </Card>
    )
}