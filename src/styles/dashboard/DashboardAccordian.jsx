import { ListItemButton, styled , Typography} from "@mui/material";
import { Colors } from "../theme";
import { darken } from "polished";


export const StyledListItemButton = styled(ListItemButton)(()=> ({
    display:"flex",
    alignItems:"center",
    transition:".4s",
    '&.active': {
        backgroundColor: Colors.secondary,
    },
    "&:hover":{
        background:darken(0.1, Colors.secondary),
    },
    '& .MuiSvgIcon-root':{
        color:Colors.white,
    }

}));

export const StyledTypography =  styled(Typography, {
    shouldForwardProp: (prop) => prop !== 'barActive',
})(({barActive,theme}) => ({
    display:barActive ? 'block' : 'none',
    // [theme.breakpoints.down('md')]:{
    //     display: barActive ? 'none' : 'block', 
    // },
    textWrap:"nowrap",
}));