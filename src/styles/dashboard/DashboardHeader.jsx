import { styled ,Box} from "@mui/material";
import { Colors } from "../theme";
import { darken } from "polished";



export const HeaderContainer = styled(Box)(()=> ({
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center",
    padding:"10px 15px",
    background:darken(0.1, Colors.secondary),
    boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",

}))

export const IconContainer = styled(Box)(()=> ({
    background: Colors.white,
    borderRadius:"50%",
    height:"45px",
    width: "45px",
    display:"flex",
    alignItems:'center',
    justifyContent:"center"
}))