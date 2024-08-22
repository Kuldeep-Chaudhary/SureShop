import { Box, Divider, IconButton, styled } from "@mui/material";
import { Colors } from "../theme";
import "@fontsource/montez"

export const SidebarContainer = styled(Box, {
    shouldForwardProp: (prop) => prop !== 'barActive',
})(({barActive,theme}) => ({
    width: barActive ? '225px' : '70px',
    height: "100%",
    padding: "20px",
    position: "fixed",
    top: "0",
    left: "0",
    zIndex: "1001",
    background: Colors.light_gray,
    boxShadow: "0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
    transitionDuration: ".2s, .2s, .35s",
    transitionProperty: "top, bottom, width",
    transitionTimingFunction: "linear, linear, ease",
    [theme.breakpoints.down('md')]:{
        width:"225px",
        left: barActive ? '0' : '-100%',
        transition: '.4s',
    },
    '&::after': {
        content: '""',
        position: "absolute",
        top: "0",
        left:"0",
        width: "100%",
        height: "100%",
        display: "block",
        zIndex: 3,
        opacity: "0.8",
        background: "rgb(78, 78, 78)",
    },
    '&:hover': {
        width: '225px', 
        
        '& .MuiBox-root ': { 
            visibility:"visible",
        },
        '& .MuiTypography-body1': {
            display:"block",
        }
    },
}));
export const SidebarBg = styled(Box)(()=> ({
    position:"absolute",
    width:"100%",
    height:"100%",
    top:"0",
    left:"0",
    bottom:"0",
    display:"block",
    transition:"all 300ms linear",
    backgroundImage: "url(/images/sidebar/sidebar-1.jpg)",
    backgroundSize:"cover",
    backgroundPosition:"center center",

}));
export const SidebarHeader = styled(Box)(({theme})=>({
    position:"relative",
    zIndex:4,
    display:"flex",
    color:Colors.white,
    [theme.breakpoints.down('md')]:{
        justifyContent:"space-between",
    },
    '& .MuiSvgIcon-root':{
        color:Colors.white,
    }
}));
export const SidebarTitle = styled(Box, {
    shouldForwardProp: (prop) => prop !== 'barActive', // Avoid passing `barActive` to the DOM
})(({ barActive, theme }) => ({
    color: Colors.white,
    fontSize: '24px',
    background: 'transparent',
    border: 'none',
    whiteSpace: 'nowrap',
    fontWeight: '700',
    fontFamily: '"Montez", cursive',
    textTransform: 'capitalize',
    letterSpacing: '2px',
    visibility: barActive ? 'visible' : 'hidden', 
    // [theme.breakpoints.down('md')]:{
    //     visibility: barActive ? 'visible' : 'hidden', 
    // },
}));
export const CloseSidebar = styled(IconButton)(({theme})=>({
    color:Colors.white,
     display:"none",
     [theme.breakpoints.down('md')]:{
        display:"inline-flex",
     }
}));
export const MiddleDivider = styled(Divider)(()=>({
    borderColor:"hsla(0, 0%, 100%, .3)",
    position:"relative",
    zIndex:4,
}))
export const SidebarBody = styled(Box)(()=> ({
    position:"relative",
    zIndex:4,
    color:Colors.white,
}))
