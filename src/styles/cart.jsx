import { styled } from "@mui/material";
import { Colors } from "./theme";

export const CartImage = styled('img')(({src})=> ({
    width:"75px",
    src:`url(${src})`,
    background: Colors.light_gray,
    padding: '10px',
}))