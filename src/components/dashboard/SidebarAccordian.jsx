import { IconButton, List } from "@mui/material";
import DashboardIcon from '@mui/icons-material/Dashboard';
import { StyledListItemButton, StyledTypography } from "../../styles/dashboard/DashboardAccordian";
import { MiddleDivider } from "../../styles/dashboard/DashboardSidebar";
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import AddIcon from '@mui/icons-material/Add';
import PersonIcon from '@mui/icons-material/Person';
import EditIcon from '@mui/icons-material/Edit';
import { NavLink } from "react-router-dom";
import { useUIContext } from "../../context/ui";

export default function SidebarAccordian(){

    const {barActive} = useUIContext();

return(
    <>
    <List>
        <StyledListItemButton LinkComponent={NavLink} to="/admin/dashboard"><IconButton><DashboardIcon/> </IconButton> <StyledTypography barActive={barActive}>Dashboard</StyledTypography> </StyledListItemButton>
        <MiddleDivider variant="midle"/>
        <StyledListItemButton LinkComponent={NavLink} to="/admin/dproducts"><IconButton><ProductionQuantityLimitsIcon/> </IconButton> <StyledTypography barActive={barActive}>Products</StyledTypography></StyledListItemButton>
        <MiddleDivider variant="midle"/>
        <StyledListItemButton LinkComponent={NavLink} to="/admin/addproducts"><IconButton><AddIcon/> </IconButton> <StyledTypography barActive={barActive}>Add Products</StyledTypography> </StyledListItemButton>
        <MiddleDivider variant="midle"/>
        <StyledListItemButton LinkComponent={NavLink} to="/admin/user"><IconButton><PersonIcon/> </IconButton> <StyledTypography barActive={barActive}>Users</StyledTypography>   </StyledListItemButton>
        <MiddleDivider variant="midle"/>
        <StyledListItemButton LinkComponent={NavLink} to="/admin/editdata"><IconButton><EditIcon/> </IconButton> <StyledTypography barActive={barActive}>Edit Data</StyledTypography>   </StyledListItemButton>
        <MiddleDivider variant="midle"/>
    </List>
    </>
)

}