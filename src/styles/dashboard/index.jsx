import { styled, Box } from "@mui/material";
import { Colors } from "../theme";



export const ParentContain = styled(Box,{
    shouldForwardProp:(prop) => prop !== 'barActive',
})(({barActive,theme})=> ({
    width: barActive ? 'calc(100% - 265px)' : 'calc(100% - 110px)',
    [theme.breakpoints.down('md')]:{
        width:"100%",
    },
    marginLeft:"auto",
    transitionDuration: ".2s, .2s, .35s",
    transitionProperty: "top, bottom, width",
    transitionTimingFunction: "linear, linear, ease",
    
}))
export const DashboardContain = styled(Box)(()=> ({
    marginLeft:"auto",
    textAlign:"center",
    background:Colors.white,
    color:Colors.dim_grey,
    padding:"20px",
    minHeight:"calc(100vh - 155px)",
}))