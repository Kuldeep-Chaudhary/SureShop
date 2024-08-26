import { Button, Container, FormControl, Grid, List, ListItemIcon, ListItemText, Typography } from "@mui/material";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import MailIcon from '@mui/icons-material/Mail';
import { LeftContactCard, RightContactCard, StyledListButton, StyledListButton2, } from "../../styles/contact";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import SendIcon from '@mui/icons-material/Send';
import { Matches } from "../../styles/theme";
import TextField from '@mui/material/TextField';
import Map from "./Map";


export default function  ContactCard() {
const matches = Matches();
    return(
        <Container
        sx={{
          my: "20px",
          padding: 0,
        }}>
          
        <Grid container item py={3}
       spacing={{ xs: 0, sm: 0, md: 2, lg: 2 }} >
            <LeftContactCard item sm={12} md={4} order={matches ? 2  :  1}>
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

                <RightContactCard  order={matches ? 1  :  2}  sm={12}  md={8}>
                {/* <h1>Right CArd</h1> */}
                <Grid container spacing={{ xs: 2, sm: 2, md: 2, lg: 2 }} pt={3} >
                    <Grid item xs={12} sm={6}  md={6}><FormControl fullWidth> <TextField id="first_name" label="First Name" variant="outlined" /></FormControl></Grid>
                    <Grid item xs={12} sm={6}  md={6}> <FormControl fullWidth> <TextField id="last_name" label="Last Name" variant="outlined" /></FormControl></Grid>
                    <Grid item xs={12} sm={6}  md={6}><FormControl fullWidth> <TextField id="mobile" label="Mobile" variant="outlined" /></FormControl></Grid>
                    <Grid item xs={12} sm={6}  md={6}> <FormControl fullWidth> <TextField id="email" label="Email Address" variant="outlined" /></FormControl></Grid>
                    <Grid item xs={12}><FormControl fullWidth> <TextField label="Your Message" multiline rows={4} variant="outlined" fullWidth /></FormControl></Grid>
                    <Grid item xs={12}><Button  type="submit"  variant="contained" sx={{
                        padding:"10px 20px",
                    }}> Send Message</Button></Grid>
                </Grid>
                </RightContactCard>
        </Grid>
        <Map/>
        </Container>
    )

};