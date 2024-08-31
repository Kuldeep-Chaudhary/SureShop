import { Box, styled, Typography } from "@mui/material";
import { Colors } from "../theme";

export const LoginContainer = styled(Box)(()=>({
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    width:'100%',
    height:"100vh",
    position:"fixed",
    zIndex:"99999999"

}))

export const LoginCard = styled(Box)(()=>({
    width:"100%",
    maxWidth:"450px",
    background:Colors.light_gray,
    fontSize:"14px",
    padding:"20px",
    borderRadius:"10px",
    boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px'

}))

export const LoginTitle = styled(Typography)(()=> ({
    paddingBottom:"20px",
    textAlign:"center",
    textTransform:"uppercase",
    fontWeight:600,
}))