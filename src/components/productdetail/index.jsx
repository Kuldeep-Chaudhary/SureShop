import { Button, Container, Divider, Grid, List, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import React from 'react'
import {  ProductImage } from '../../styles/products';
import { products } from '../../data';
import { Colors, Matches } from '../../styles/theme';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

const ProductDetail = () => {
    const matches= Matches();
    console.log(products[0].images);
    
  return (
    <>
    <Container>
        <Grid container mt={3}>
            <Grid item md={6} sx={{textAlign:"center"}}> 
                <ProductImage src={products[0].images} sx={{
                    maxWidth:"inherit"
                }}/>
            </Grid>
            <Grid item md={6}>
                <Typography  variant={matches ? "h6" : "h5"} lineHeight={2}>
                    {products[0].name}
                </Typography>
            <Typography variant={matches ? "caption" : "body1"}>
               <b>Price:</b> ${products[0].price}
            </Typography>
            <Typography variant={ "body1"}>
                <b>Description:</b> {products[0].description}
            </Typography>
            <Typography variant={ "body1"} display="flex" alignItems="center" mt={1}>
                <b>Size:</b> 
                <List sx={{
                display:"flex",
                alignItems:"center",
                justifyContent:"center",
                width:"50%",
                background:Colors.light_gray,
                padding:"0",
                marginLeft:"5px",
                border:`1px solid ${Colors.primary}`,

            }}>
                    <ListItemButton ><ListItemText sx={{textAlign:"center"}}>M</ListItemText></ListItemButton>
                    <Divider orientation="vertical" flexItem/>
                    <ListItemButton><ListItemText sx={{textAlign:"center"}}>L</ListItemText></ListItemButton>        
                    <Divider orientation="vertical" flexItem/>
                    <ListItemButton><ListItemText sx={{textAlign:"center"}}>XL</ListItemText></ListItemButton>            
                    <Divider orientation="vertical" flexItem/>
                    <ListItemButton><ListItemText sx={{textAlign:"center"}}>XXL</ListItemText></ListItemButton>
                </List>
            </Typography>
            <List sx={{
                display:"flex",
                alignItems:"center",
                width:"50%",
                background:Colors.light_gray,
                padding:"0",
                marginTop:"10px"

            }}>
                <ListItemButton   sx={{
                    background:Colors.white,
                    justifyContent:"center",
                    width:"40px",
                    marginLeft:"4px",
                }}>
                    <ListItemIcon  sx={{
                    background:Colors.white,
                    justifyContent:"center"
                }}><RemoveIcon/></ListItemIcon>
                </ListItemButton>
                <ListItemButton >
                    <ListItemText sx={{
                        textAlign:"center"
                    }}>Count</ListItemText>
                    </ListItemButton>
                <ListItemButton  sx={{
                    background:Colors.white,
                    justifyContent:"center",
                    width:"40px",
                    marginRight:"4px",
                }} > <ListItemIcon  sx={{
                    background:Colors.white,
                    justifyContent:"center"
                }}><AddIcon/></ListItemIcon></ListItemButton>

            </List>
            <Button sx={{
                marginTop:"10px",
            }} variant="contained">Add to cart</Button>
            <Button sx={{
                marginTop:"10px",
                marginLeft:"10px",
                background:Colors.secondary,
            }} variant="contained">Buy Product</Button>
            </Grid>
        </Grid>
    </Container>
    </>
  )
}

export default ProductDetail;