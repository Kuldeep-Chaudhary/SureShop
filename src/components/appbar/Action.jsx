import { Divider, ListItemButton, ListItemIcon, Typography } from "@mui/material";
import { ActionIconsContainerDesktop, ActionIconsContainerMobile, cartIcon, MyList } from "../../styles/appbar";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonIcon from '@mui/icons-material/Person';
import { Colors } from "../../styles/theme";
import {  hoverButtonStyles} from "../../styles/appbar";
import { useUIContext } from "../../context/ui";
import { Link } from "react-router-dom";


export default function Actions({matches}) {
    const Componenet = matches 
    ? ActionIconsContainerMobile 
    : ActionIconsContainerDesktop;


    const {cartValue} = useUIContext();

    return(
        <Componenet>
            
        <MyList type="row">
            <ListItemButton LinkComponent={Link} to='/cart'  sx={hoverButtonStyles}>
                <ListItemIcon
                sx={{
                    display:"flex",
                    justifyContent:"center",
                    color: matches && Colors.secondary,
                }}>
                    <ShoppingCartIcon>
                    </ShoppingCartIcon>
                    <Typography sx={cartIcon} variant="span">{cartValue}</Typography>
                </ListItemIcon>
            </ListItemButton>
            <Divider orientation="vertical" flexItem/>
            <ListItemButton  sx={hoverButtonStyles}>
                <ListItemIcon
                sx={{
                    display:"flex",
                    justifyContent:"center",
                    color: matches && Colors.secondary,
                }}>
                    <FavoriteIcon/>
                </ListItemIcon>
            </ListItemButton>
            <Divider orientation="vertical" flexItem/>
            <ListItemButton LinkComponent={Link} to='/login'  sx={hoverButtonStyles}>
                <ListItemIcon
                sx={{
                    display:"flex",
                    justifyContent:"center",
                    color: matches && Colors.secondary,
                }}>
                    <PersonIcon/>
                </ListItemIcon>
            </ListItemButton>
            <Divider orientation="vertical" flexItem/>

        </MyList>
        </Componenet>
    )
}