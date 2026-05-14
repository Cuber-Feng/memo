// src/components/Navbar.jsx
import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText, Box, ListItemButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', width: '12rem' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                Pages
            </Typography>
            <List>
                <ListItemButton component={Link} to="/">
                    <ListItemText primary="Cube" />
                </ListItemButton>
                <ListItemButton component={Link} to="/about">
                    <ListItemText primary="About" />
                </ListItemButton>
            </List>
        </Box>
    );

    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <Typography
                        variant="h6"
                        // sx={{ flexGrow: 1 }}
                        component={Link}
                        to="/"
                        sx={{
                            flexGrow: 1,
                            color: 'inherit',          // 继承 Typography 默认颜色（通常是黑色或主题文字颜色）
                            textDecoration: 'none',     // 强制去掉链接下划线
                            boxShadow: 'none',          // 某些情况下防止阴影干扰
                            '&:hover': {
                                textDecoration: 'none'
                            }
                        }}
                    >
                        Memorandum
                    </Typography>

                    {/* Desktop buttons */}
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        <Button color="inherit" component={Link} to="/">
                            Cube
                        </Button>
                        <Button color="inherit" component={Link} to="/about">
                            About
                        </Button>
                    </Box>

                    {/* Mobile hamburger */}
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="end"
                        onClick={handleDrawerToggle}
                        sx={{ display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>

            {/* Mobile drawer */}
            <Drawer
                anchor="right"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile
                }}
            >
                {drawer}
            </Drawer>
        </>
    );
}