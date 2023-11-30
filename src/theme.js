import {
    red
} from '@mui/material/colors';
import {
    createTheme
} from '@mui/material/styles';

// import { makeStyles } from '@material-ui/core/styles';

// export const useStyles = makeStyles({
//   noBackgroundTable: {
//     backgroundColor: 'transparent !important', // Set the background color to transparent
//   },
// });

// A custom theme for this app
const theme = createTheme({
    palette: {
        primary: {
            main: '#43A4F5',
            contrastText: '#ffffff',
            mainGradient: "linear-gradient(to right, #15A4FB, #3FF7A6)",
        },
        primaryInverse: {
            contrastText: '#43A4F5',
            main: '#ffffff',
            light: '#0060AF'
        },
        secondary: {
            main: '#243BBD',
            contrastText: '#ffffff',
            mainGradient: "linear-gradient(to right, #2439AE, #0A1A71)",
        },
        secondaryInverse: {
            main: '#FDD992',
            contrastText: '#EA8B1B'
        },
        greyBorder: {
            main: "#EAEAF0",
            contrastText: "#69698C"
        },
        error: {
            main: red.A400,
        },
    },
    components: {
        MuiChip: {
            styleOverrides: {
                root: {
                    fontWeight: 400,
                    fontSize: "14px",
                    fontFamily: "Poppins, sans-serif",
                    textTransform: "capitalize",
                },
            },
        },
        MuiButtonBase: {
            styleOverrides: {
                root: {
                    fontFamily: "Poppins, sans-serif",
                },
            },
        },
        // MuiFormControlLabel: {
        //   styleOverrides: {
        //     root: {
        //       fontWeight: 500,
        //       fontSize: "16px",
        //       fontFamily: "Poppins, sans-serif",
        //       textTransform: "capitalize",
        //     },
        //   },
        // },
        // MuiOutlinedInput: {
        //   styleOverrides: {
        //     root: {
        //       height: "3rem",
        //       borderWidth: 0,
        //     },
        //     fieldSet: {
        //       borderRadius: 12,
        //     },
        //     input: {
        //       padding: "14px 14px",
        //       paddingRight: 0,
        //     },
        //   },
        // },

        MuiTableRow: {
            styleOverrides: {
                root: {
                    border: '0px !important',
                    "&:hover": {
                        backgroundColor: '#243BBD !important',
                        opacity: 0.9,
                    }
                }
            }
        },
        MuiTableCell: {
            styleOverrides: {
                root: {
                    fontFamily: "Poppins, sans-serif",
                    // borderRadius: "12px !important",
                    "&:hover": {
                        border: "none !important",
                    },
                },
            },
        },
        MuiTooltip: {
            styleOverrides: {
                tooltip: {
                    background: "#181820",
                    borderRadius: 6,
                    textTransform: 'capitalize'
                },
            },
        },

        MuiButton: {
            styleOverrides: {
                root: {
                    fontWeight: 500,
                    fontFamily: "Poppins, sans-serif",
                    textTransform: "capitalize",
                    boxShadow: "none !important",
                    borderRadius: '8px',
                    "&:disabled": {
                        opacity: 0.5,
                        cursor: "not-allowed",
                        color: "default",
                        backgroundColor: "default",
                    },
                    "&.MuiButton-sizeMedium": {
                        padding: "0.6rem 1.3rem",
                        fontSize: "1rem !important",
                        "@media (max-width: 760px)": {
                            fontSize: "0.8rem !important",
                            padding: "0.6rem",
                        },
                    },
                    "&.MuiButton-sizeSmall": {
                        padding: "6px 16px",
                    },
                    "&.MuiButton-text": {
                        padding: "0rem !important",
                    },
                },
            },
        },
    }
});

export default theme;