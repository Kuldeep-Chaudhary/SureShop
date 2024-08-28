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


// // import { IconButton, List } from "@mui/material";
// import DashboardIcon from '@mui/icons-material/Dashboard';
// import { StyledListItemButton, StyledTypography } from "../../styles/dashboard/DashboardAccordian";
// import { MiddleDivider } from "../../styles/dashboard/DashboardSidebar";
// import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
// // import AddIcon from '@mui/icons-material/Add';
// // import PersonIcon from '@mui/icons-material/Person';
// import EditIcon from '@mui/icons-material/Edit';
// import { NavLink } from "react-router-dom";
// import { useUIContext } from "../../context/ui";
// import React, { useState } from 'react';
// import { List, IconButton, Menu, MenuItem } from '@mui/material';
// // import { NavLink } from 'react-router-dom';
// // import DashboardIcon from '@mui/icons-material/Dashboard';
// // import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
// // import AddIcon from '@mui/icons-material/Add';
// import PersonIcon from '@mui/icons-material/Person';
// // import EditIcon from '@mui/icons-material/Edit';
// // import StyledListItemButton from './StyledListItemButton';
// // import StyledTypography from './StyledTypography';
// // import MiddleDivider from './MiddleDivider';

// export default function SidebarAccordian(){

//     const {barActive} = useUIContext();
//     const [anchorEl, setAnchorEl] = useState(null);

// const handleClick = (event) => {
//   setAnchorEl(event.currentTarget);
// };

// const handleClose = () => {
//   setAnchorEl(null);
// };

// return(
//     <>
// <List>
//   <StyledListItemButton LinkComponent={NavLink} to="/admin/dashboard">
//     <IconButton><DashboardIcon/> </IconButton>
//     <StyledTypography barActive={barActive}>Dashboard</StyledTypography>
//   </StyledListItemButton>
//   <MiddleDivider variant="midle"/>

//   {/* Products with Dropdown */}
//   <StyledListItemButton onClick={handleClick}>
//     <IconButton><ProductionQuantityLimitsIcon/> </IconButton>
//     <StyledTypography barActive={barActive}>Products</StyledTypography>
//   </StyledListItemButton>
//   <Menu
//     anchorEl={anchorEl}
//     open={Boolean(anchorEl)}
//     onClose={handleClose}
//   >
//     <MenuItem component={NavLink} to="/admin/dproducts" onClick={handleClose}>View Products</MenuItem>
//     <MenuItem component={NavLink} to="/admin/addproducts" onClick={handleClose}>Add Products</MenuItem>
//   </Menu>
//   <MiddleDivider variant="midle"/>

//   <StyledListItemButton LinkComponent={NavLink} to="/admin/user">
//     <IconButton><PersonIcon/> </IconButton>
//     <StyledTypography barActive={barActive}>Users</StyledTypography>
//   </StyledListItemButton>
//   <MiddleDivider variant="midle"/>

//   <StyledListItemButton LinkComponent={NavLink} to="/admin/editdata">
//     <IconButton><EditIcon/> </IconButton>
//     <StyledTypography barActive={barActive}>Edit Data</StyledTypography>
//   </StyledListItemButton>
//   <MiddleDivider variant="midle"/>
// </List>

//     </>
// )

// }