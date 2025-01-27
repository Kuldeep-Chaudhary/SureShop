import { styled, TextField, Typography } from "@mui/material";
import { Colors } from "../theme";

export const FooterTitle = styled(Typography)(()=>({
    textTransform:"uppercase",
    marginBottom:"1rem",
}));

export const SubscribeTF = styled(TextField)(()=> ({
    '.MuiFormLabel-root' : {
        color: Colors.secondary
    },
    ".MuiInput-root::before":{
        borderBottom: `1px solid ${Colors.secondary}`
    }
}));