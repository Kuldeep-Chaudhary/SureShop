import { HeaderContainer, IconContainer } from "../../styles/dashboard/DashboardHeader";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PersonIcon from '@mui/icons-material/Person';
import { useUIContext } from "../../context/ui";


export default function DashboardHeader(){

    const {barActive,setBarActive} = useUIContext();

    return(
        <HeaderContainer>
            <IconContainer onClick={() => setBarActive (barActive ? false : true)}><MoreVertIcon/></IconContainer>
            {console.warn(barActive)}
            <IconContainer><PersonIcon/></IconContainer>
        </HeaderContainer>
    )
}