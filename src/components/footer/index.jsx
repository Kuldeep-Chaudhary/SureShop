import { Box, Button, Grid, List, ListItemText, Stack, Typography } from "@mui/material";
import { Colors } from "../../styles/theme";
import { FooterTitle, SubscribeTF } from "../../styles/footer";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import SendIcon from '@mui/icons-material/Send';


export default function Footer(){
    return(
        <Box
        sx={{
            background: Colors.shaft,
            color: Colors.white,
            p:{xs:4, md:10},
            pt:12,
            pb:12,
            fontSize:{xs:"12px", md:"14px"}
        }}>
            
            <Grid container spacing={2} justifyContent={"center"}>
                <Grid item md={6} lg={4}>
                    <FooterTitle variant="body1">About us</FooterTitle>
                    <Typography variant="caption2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, ipsum.

                    </Typography>
                    <Box sx={{
                        mt:4,
                        color: Colors.dove_gray
                    }}>
                        <FacebookIcon sx={{mr:1}}/>
                        <InstagramIcon sx={{mr:1}}/>
                        <TwitterIcon/>
                    </Box>
                </Grid>
                <Grid item md={6} lg={2}>
                    <FooterTitle variant="body1">Information</FooterTitle>
                    <List>
                        <ListItemText>
                            <Typography lineHeight={2} variant="caption2">
                                About us
                            </Typography>
                        </ListItemText>
                        <ListItemText>
                            <Typography lineHeight={2} variant="caption2">
                               Order Tracking
                            </Typography>
                        </ListItemText>
                        <ListItemText>
                            <Typography lineHeight={2} variant="caption2">
                                Privecy &amp; Policy
                            </Typography>
                        </ListItemText>
                        <ListItemText>
                            <Typography lineHeight={2} variant="caption2">
                            Terms &amp; Conditions
                            </Typography>
                        </ListItemText>
                    </List>
                </Grid>
                <Grid item md={6} lg={2}>
                    <FooterTitle variant="body1">My Account</FooterTitle>
                    <List>
                        <ListItemText>
                            <Typography lineHeight={2} variant="caption2">
                                Login
                            </Typography>
                        </ListItemText>
                        <ListItemText>
                            <Typography lineHeight={2} variant="caption2">
                               My Cart
                            </Typography>
                        </ListItemText>
                        <ListItemText>
                            <Typography lineHeight={2} variant="caption2">
                                My Account
                            </Typography>
                        </ListItemText>
                        <ListItemText>
                            <Typography lineHeight={2} variant="caption2">
                            Wishlist
                            </Typography>
                        </ListItemText>
                    </List>
                </Grid>
                <Grid item md={6} lg={4}>
                <FooterTitle variant="body1">Newslatter</FooterTitle>
                   <Stack>
                    <SubscribeTF
                    color="primary"
                    label="Email address"
                    variant="standard"/>
                        <Button
                        startIcon={<SendIcon sx={{color: Colors.white}}/>}
                        sx={{mt:4, mb:4}}
                        variant="contained"
                        > Send</Button>
                   </Stack>
                </Grid>

            </Grid>
        </Box>
    )
}