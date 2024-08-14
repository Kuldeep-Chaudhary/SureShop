import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import {  AppbarContainer, AppbarHeader, MyList,hoverTextStyles ,hoverButtonStyles} from "../../styles/appbar";
import SearchIcon from '@mui/icons-material/Search';
import Actions from "./Action";
import { useUIContext } from "../../context/ui";
import {  NavLink } from "react-router-dom";

export default function AppbarDesktop({matches}){

const {setShowSearchBox} = useUIContext();

    return(
        <AppbarContainer>
            <AppbarHeader>My Bags</AppbarHeader>
            <MyList type="row">
               <ListItemButton  component={NavLink} to="/"  sx={hoverTextStyles}><ListItemText>Home</ListItemText> </ListItemButton>
                <ListItemButton  component={NavLink} to='/about' sx={hoverTextStyles}><ListItemText>About </ListItemText></ListItemButton>
                <ListItemButton  component={NavLink} to='/products' sx={hoverTextStyles}><ListItemText>Products</ListItemText></ListItemButton>
                <ListItemButton component={NavLink} to="/contact"  sx={hoverTextStyles}><ListItemText>Contact </ListItemText></ListItemButton>                             
                <ListItemButton sx={hoverButtonStyles}>
                    <ListItemIcon onClick={() => setShowSearchBox(true)}>
                        <SearchIcon />
                    </ListItemIcon>
                </ListItemButton>
                <Actions matches={matches}/>
            </MyList>
        </AppbarContainer>
    );
};