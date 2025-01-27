import { Box, styled, Typography } from "@mui/material"
import { Colors } from "../theme"

export const PromotionsContainer = styled(Box)(({theme}) => ({

    [theme.breakpoints.up('md')]:{
        Padding: '40px 0px 40px 0px'
    },
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    padding:'20px 0 20px 0',
    overflow:'hidden',
    background: Colors.secondary
 
}))

// message

export const MessageText = styled(Typography)(({theme}) => ({

    fontFamily: ' "Montez", "cursive"',
    [theme.breakpoints.up('md')]:{
        fontSize:'3rem',
    },
    color: Colors.white,
    fontSize: '1.5rem'

}))