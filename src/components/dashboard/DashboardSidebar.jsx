import { IconButton } from "@mui/material";
import { CloseSidebar, MiddleDivider, SidebarBg, SidebarBody, SidebarContainer, SidebarHeader, SidebarTitle } from "../../styles/dashboard/DashboardSidebar";
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import CloseIcon from '@mui/icons-material/Close';
import SidebarAccordian from "./SidebarAccordian";
import { useUIContext } from "../../context/ui";
// import { Link } from "react-router-dom";


export default function DashboardSidebar(){
    const {barActive,setBarActive} = useUIContext();
    return(
        <SidebarContainer barActive={barActive}>          
            <SidebarBg ></SidebarBg>
            <SidebarHeader>
                <IconButton><ShoppingBagIcon /></IconButton>
                <SidebarTitle variant="h4"  barActive={barActive}>My Bags</SidebarTitle>
                <CloseSidebar onClick={() => setBarActive (barActive ? false : true)}><CloseIcon/></CloseSidebar>
            </SidebarHeader>
            <MiddleDivider variant="midle"/>
            <SidebarBody>
                <SidebarAccordian/>
            </SidebarBody>
        </SidebarContainer>
    )
}