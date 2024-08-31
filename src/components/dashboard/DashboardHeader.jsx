import { HeaderContainer, IconContainer } from "../../styles/dashboard/DashboardHeader";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import { useUIContext } from "../../context/ui";


export default function DashboardHeader(){

    const {barActive,setBarActive} = useUIContext();

    return(
        <HeaderContainer>
            <IconContainer onClick={() => setBarActive (barActive ? false : true)}>{barActive ? <MoreVertIcon /> : <MenuIcon />}</IconContainer>
            <IconContainer><PersonIcon/></IconContainer>
        </HeaderContainer>
    )
}