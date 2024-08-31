import { Box, styled, Typography } from "@mui/material";
import { Colors } from "../theme";


export const PageBannerContainer = styled(Box)(()=>({
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    background:Colors.light_gray,
    color:Colors.secondary,
    paddingTop:'20px',
    paddingBottom:'20px',

}));

// export const PageBannerTitle = styled(Typography)(()=> ({
// color
// }));