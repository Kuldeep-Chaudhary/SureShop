import { Box, IconButton, List, styled, Typography } from "@mui/material";
import { Colors } from "../theme";
import "@fontsource/montez"

// Container
export const AppbarContainer = styled(Box)(() => ({
    display: 'flex',
    marginTop:4,
    justifyContent:'center',
    alignItems:'center',
    padding:'2px 8px',
    background: Colors.white,

}));

// Header
export const AppbarHeader = styled(Typography)(() => ({
    padding:'4px',
    flexGrow:1,
    fontSize: '4rem',
    fontFamily:'"Montez","cursive"',
    color: Colors.secondary

}));
// list style
export const MyList =  styled(List)(({type}) =>({

    display: type === "row" ? "flex" : "block",
    flexGrow: 3,
    justifyContent: "center",
    alignItems: "center" ,

}))


// action container mobile
export  const ActionIconsContainerMobile = styled(Box)(() => ({
    display: 'flex',
    background: Colors.shaft,
    position: 'fixed',
    bottom: 0,
    left: 0,
    width: '100%',
    alignItems: 'center',
    zIndex: 99,
    borderTop: `1px solid ${Colors.border}`
}));

// action container desktop

export const ActionIconsContainerDesktop = styled(Box)(() => ({
flexGrow:0
}));



export const DrawerCloseButton = styled(IconButton)(()=>({
  position:'absolute',
  top:10,
  left:'250px',
  zIndex:1999,
}));


// Define hover styles as a JavaScript object
export const hoverTextStyles = {
  textAlign:'center',
  position:'relative',
  cursor:'pointer',
  transition: '.4s',
  fontWeight:700,
  color: Colors.primary,
  '&.active':{
    color: Colors.secondary, 
  },
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.04)',
    zIndex: 1,
  } ,
  '& .MuiTypography-root': {
    fontWeight: 700,
  },

  };
  
  export const hoverButtonStyles = {
    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.04)', 
      zIndex:11,
      textAlign:"center",
      '& > *':{
        color: Colors.secondary, },
    },
  };


// shop cart icon 

export const cartIcon = {
  position:'absolute',
  top:'-7px',
  right:'7px',
  borderRadius:'50%',
  background: Colors.primary,
  color: Colors.white,
  fontSize:'1.2rem',
  width:'25px',
  Height:'25px',
  textAlign:'center',
}