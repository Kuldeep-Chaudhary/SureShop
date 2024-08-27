// import React, { useState } from 'react';
import DashboardFooter from '../../components/dashboard/DashboardFooter';
import DashboardNavbar from './DashboardNavbar';
import { ParentContain } from '../../styles/dashboard';
import { useUIContext } from "../../context/ui";
import { Button, FormControl, Grid, TextField, Typography} from '@mui/material';


const EditData = () => {
  const { barActive } = useUIContext();
  return (
    <>
      <ParentContain barActive={barActive}>
    <DashboardNavbar/>
        <Typography variant='h4' my={3} textAlign="center">Edit Products</Typography>

        <Grid container spacing={{ xs: 2, sm: 2, md: 2, lg: 2 }} p={3}>
          <Grid item xs={12} sm={6} md={6}>
            <FormControl fullWidth>
              <TextField id="Ename" label="Product Name" variant="outlined" />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <FormControl fullWidth>
              <TextField id="Ecategory" label="Product Category" variant="outlined" />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <FormControl fullWidth>
              <TextField id="Esize" label="Product Size" variant="outlined" />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <FormControl fullWidth>
              <TextField id="Eprice" label="Product Price" variant="outlined" />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={4} md={4}> 
            <FormControl fullWidth>
              <TextField id="pupload" label="Upload image" type='file' InputLabelProps={{shrink: true,}} variant="outlined" name='pupload'/>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <TextField
                id="Edescription"
                label="Product Description"
                multiline
                rows={4}
                variant="outlined"
                fullWidth
              />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              sx={{
                padding: "10px 20px",
              }}
            >
              Edit Products
            </Button>
          </Grid>
        </Grid>
    <DashboardFooter/>
    </ParentContain>
    </>
  )
}

export default EditData;