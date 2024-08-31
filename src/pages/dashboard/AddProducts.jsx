import React, { useState } from 'react';
import DashboardFooter from '../../components/dashboard/DashboardFooter';
import DashboardNavbar from './DashboardNavbar';
import { ParentContain } from '../../styles/dashboard';
import { useUIContext } from "../../context/ui";
import { Button, FormControl, Grid, TextField, Typography } from '@mui/material';
import axios from 'axios';

const AddProducts = () => {
  const { barActive } = useUIContext();

  const [dinpute, setdinpute] = useState({
    pname: '',
    pcategory: '',
    psize: '',
    pprice: '',
    pupload: null,
    pdescription: ''
  });

  const inphendle = (e) => {
    const { name, value, files } = e.target;

    if (name === 'pupload') {
      setdinpute({ ...dinpute, [name]: files[0] });
    } else {
      setdinpute({ ...dinpute, [name]: value });
    }
  };

  const postproduct = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();

      for (const key in dinpute) {
        formData.append(key, dinpute[key]);
      }

      for (let [key, value] of formData.entries()) {
        console.log(`${key}:`, value);
      }

      const response = await axios.post('http://localhost:9999/admin/addproducts', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      console.log(response.data.msg);
      setdinpute('')
    } catch (error) {
      console.error("Error posting product:", error);
    }
  };

  return (
    <>
      <ParentContain barActive={barActive}>
        <DashboardNavbar />
        <Typography variant='h4' my={3} textAlign="center">Add New Products</Typography>

        <Grid container spacing={{ xs: 2, sm: 2, md: 2, lg: 2 }} p={3}>
          <Grid item xs={12} sm={6} md={6}>
            <FormControl fullWidth>
              <TextField
                id="pname"
                label="Product Name"
                variant="outlined"
                value={dinpute.pname}
                name='pname'
                onChange={inphendle}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <FormControl fullWidth>
              <TextField
                id="pcategory"
                label="Product Category"
                variant="outlined"
                value={dinpute.pcategory}
                onChange={inphendle}
                name='pcategory'
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <FormControl fullWidth>
              <TextField
                id="psize"
                label="Product Size"
                variant="outlined"
                value={dinpute.psize}
                onChange={inphendle}
                name='psize'
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={4} md={4}> 
            <FormControl fullWidth>
              <TextField
                id="pprice"
                label="Product Price"
                variant="outlined"
                value={dinpute.pprice}
                onChange={inphendle}
                name='pprice'
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={4} md={4}> 
            <FormControl fullWidth>
              <TextField
                id="pupload"
                label="Upload Image"
                type='file'
                InputLabelProps={{ shrink: true }}
                variant="outlined"
                onChange={inphendle}
                name='pupload'
              />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <TextField
                id="pdescription"
                label="Product Description"
                multiline
                rows={4}
                variant="outlined"
                value={dinpute.pdescription}
                onChange={inphendle}
                name='pdescription'
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
              onClick={postproduct}
            >
              Add Products
            </Button>
          </Grid>
        </Grid>
        <DashboardFooter />
      </ParentContain>
    </>
  );
};

export default AddProducts;
