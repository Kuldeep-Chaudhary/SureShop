import { IconButton } from "@mui/material";
import { AppbarContainer, AppbarHeader } from "../../styles/appbar";
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Actions from "./Action";
import { useUIContext } from "../../context/ui";

export default function AppbarMobile({matches}){
const {setDrawerOpen, setShowSearchBox} = useUIContext()
    return(
        <AppbarContainer>
            <IconButton onClick={()=> setDrawerOpen(true)}>
                <MenuIcon/>
            </IconButton>
            <AppbarHeader variant="h4" textAlign={"center"}>My bags</AppbarHeader>
            <SearchIcon onClick={()=> setShowSearchBox(true)}/>
            <Actions matches={matches}/>
        </AppbarContainer>
    );
};