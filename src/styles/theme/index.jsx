import {  createTheme } from "@mui/material";
import {  lighten } from "polished";
import { useMediaQuery, useTheme } from "@mui/material";

export const Colors={
    primary : "#5f2c3e",
    // primary : "#E6E6FA",
    secondary : "#d1adcc",
    success : "#4CAF50",
    info : "#00a2ff",
    danger : "#FF5722",
    warning : "#FFC107",
    dark : "#0e1d20",
    light : "#aaa",
    muted : "abafb3",
    border : "DDDFE1",
    inverse : "2F3D4A",
    shaft : "#333",
    // grays
    dim_grey : "#696969",
    dove_gray : "#d5d5d5",
    light_gray : "rgb(230,230,230)",
    // solid color
    white : "#fff",
    black : "#000",
    
}

const theme =  createTheme({

    palette: {
        primary: {
            main: Colors.primary
        },
        secondary: {
            main: Colors.secondary
        }
    },

    components:{
        MuiButton:{
            defaultProps:{
                disableRipple:true,
                disableElevation:true,
            },
        },
        
// banner shop button (mui custom)
        MyShopButton:{
            styleOverrides:{
                root: {
                    color: Colors.white
                },
                primary:{
                    background: Colors.primary,
                    "&:hover":{
                        background:lighten(0.1, Colors.primary),
                    }
                },
                secondary:{
                    background: Colors.secondary,
                    "&:hover":{
                        background:lighten(0.5, Colors.secondary),
                    },
                },
            }
        },

        // drawe style
        MuiDrawer:{
            styleOverrides:{
                paper:{
                    width:250,
                    background: Colors.primary,
                    color:Colors.secondary,
                    borderRadius:'0px 100px 0px 0px',
                    borderRight:`1px solid ${Colors.secondary}`
                }
            }
        },
        MuiDivider:{
            styleOverrides:{
                root:{
                    borderColor:lighten(0.2, Colors.primary)
                }
            }
        }
    },

})

export function Matches(){
    
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));
    return matches;
}


export default theme;