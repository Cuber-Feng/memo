import { createTheme } from '@mui/material/styles'

const theme = createTheme({
    palette: {
        primary: { main: '#E36A6A', mainText: '#a54d4d' },
        secondary: { main: '#FFB2B2' },
        background: {
            default: '#FFFBF1',
            paper: '#FFF2D0',
        }
    },
    typography: {
        fontFamily: '"Roboto", "Arial", sans-serif', // <-- global font
        h1: { fontFamily: '"Roboto Slab", serif' },  // optional per variant
        h2: { fontFamily: '"Roboto Slab", serif' },
        body1: { fontFamily: '"Roboto", sans-serif' },
        body2: { fontFamily: '"Arial", sans-serif' },
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                a: {
                    color: '#c94747',      // secondary color
                    textDecoration: 'none', // optional: remove underline
                    '&:hover': {
                        textDecoration: 'underline',
                    },
                },
            },
        },
    },

})

export default theme