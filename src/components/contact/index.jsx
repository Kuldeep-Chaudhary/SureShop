import { Container, Grid, List, ListItemIcon, ListItemText, Typography } from "@mui/material";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import MailIcon from '@mui/icons-material/Mail';
import { LeftContactCard, StyledListButton, StyledListButton2, } from "../../styles/contact";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import SendIcon from '@mui/icons-material/Send';


export default function  ContactCard() {

    return(
        <Container
        sx={{
          my: "20px",
          padding: 0,
        }}>
        <Grid container display='flex' py={3}
        spacing={{ xs: 2, md: 3 }} >
            <LeftContactCard item sm={12} md={4} >
                <Typography variant="h4" mb={1}>Contact Information</Typography>
                <Typography variant="description">Fill up the form and our Team will get back to you within 24 hours.</Typography>
                <List>
                    <StyledListButton >
                        <ListItemIcon><LocationOnIcon/></ListItemIcon>
                        <ListItemText>832 Thompson Drive, San Fransisco CA 94107, United States</ListItemText>
                    </StyledListButton>
                    <StyledListButton >
                        <ListItemIcon><CallIcon/></ListItemIcon>
                        <ListItemText>+91 1234567890</ListItemText>
                    </StyledListButton>
                    <StyledListButton >
                        <ListItemIcon><MailIcon/></ListItemIcon>
                        <ListItemText>mybags@gmail.com</ListItemText>
                    </StyledListButton>
                </List>
                <Typography variant="h5" mt={3} pl='17px'>Our Socials</Typography>
                <List>
                    <StyledListButton2 >
                        <ListItemIcon><FacebookIcon/></ListItemIcon>
                        <ListItemIcon><InstagramIcon/></ListItemIcon>
                        <ListItemIcon><TwitterIcon/></ListItemIcon>
                        <ListItemIcon><SendIcon/></ListItemIcon>
                    </StyledListButton2>

                </List>
                </LeftContactCard>
            <Grid item 
                sm={12}
                md={8}
            
            ><h1>Right CArd</h1></Grid>
        </Grid>
        </Container>
    )

};