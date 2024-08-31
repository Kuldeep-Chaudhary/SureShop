import React, { useEffect, useState } from 'react'
import DashboardFooter from '../../components/dashboard/DashboardFooter'
import DashboardNavbar from './DashboardNavbar'
import { Box, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import { CartImage } from '../../styles/cart'
// import { products } from '../../data'
import { ParentContain } from '../../styles/dashboard'
import { useUIContext } from "../../context/ui";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom'
import axios from 'axios'

const DProducts = () => {
  const {barActive} = useUIContext();
  const [Product,setProduct]= useState([])

const getdata = async(e)=>{
const response = await axios.get('http://localhost:9999/getProduct')
setProduct(response.data)
}
const imageBaseUrl = process.env.REACT_APP_IMAGE_BASE_URL;

useEffect(()=>{
getdata()
},[])

console.log(Product,'Product');

  return (
    <>
    <ParentContain barActive={barActive}>
    <DashboardNavbar/>
    
      <Typography variant='h4' textAlign="center" my={3}>All Products</Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Image</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Descriptaion</TableCell>
              <TableCell>Size</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Edit</TableCell>
              <TableCell>Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Product.map((item,i)=>{
              const {pupload, pname, pcategory, psize, pprice, pdescription} = item;
              return (
                <TableRow key={i}>
                <TableCell>
                <Box sx={{width:"100%",minWidth:"250px",display:"flex"}}>
                  <CartImage src={`${imageBaseUrl}/${pupload}`}/></Box>
                </TableCell>
                <TableCell>{pname}</TableCell>
                <TableCell>{pcategory}</TableCell>
                <TableCell>{psize}</TableCell>
                <TableCell>{pprice}</TableCell>
                <TableCell>{pdescription}</TableCell>
                <TableCell><IconButton LinkComponent={Link} to='/admin/editdata'><EditIcon/></IconButton></TableCell>
                <TableCell><IconButton ><DeleteIcon/></IconButton></TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
    <DashboardFooter/>
    </ParentContain>
    </>
  )
}

export default DProducts;