import { Box } from "@mui/material";
import { Colors } from "../../styles/theme";

export default function DashboardFooter(){
    return(
        <Box sx={{
            marginLeft:"auto",
            background:Colors.dim_grey,
            color:Colors.white,
            fontSize:"14px",
            padding:"10px 0",
            display:"flex",
            alignItems:"center",
            justifyContent:"center",
            height:"30px",
        }}>All rights reseverd by My Bags. Designed by Kuldeep Chaudhary</Box>
    )
}