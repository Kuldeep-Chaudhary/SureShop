import { Grid, ListItemButton, styled } from "@mui/material";
import { Colors } from "../theme";


// left grid card
export const LeftContactCard = styled(Grid)(() => ({
        padding:'20px',
        background: Colors.dim_grey,
        '& h4,& h5':{
            color:Colors.secondary,
            fontWeight:600,
        },
        '& h5':{
            color:Colors.white,
            fontWeight:600,
        },
        '& > span':{
            color:Colors.light_gray,
        }

}));

// list item 
export const StyledListButton = styled(ListItemButton)(() => ({
        display:'flex',
        alignItems:'center',
        '&  span':{
            color:Colors.white,
        },
        '& .MuiSvgIcon-root':{
            color:Colors.primary,
        }

}));


// list bottom icon
export const StyledListButton2 = styled(ListItemButton)(() => ({
    display:'flex',
    alignItems:'center',
    '& .MuiSvgIcon-root':{
        color:Colors.white,
        background:Colors.primary,
        padding:'15px',
        transition:'.4s',
        marginRight:'10px'
    },
    '& .MuiSvgIcon-root:hover':{
        color:Colors.primary,
        background:Colors.white,
        transform: 'rotate(360deg)',
    }

}));
