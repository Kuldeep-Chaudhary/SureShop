import React from 'react'
import DashboardFooter from '../../components/dashboard/DashboardFooter'
import DashboardNavbar from './DashboardNavbar'
import { Box, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import { CartImage } from '../../styles/cart'
import { products } from '../../data'
import { ParentContain } from '../../styles/dashboard'
import { useUIContext } from "../../context/ui";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom'

const DProducts = () => {
  const {barActive} = useUIContext();
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
            <TableRow>
            <TableCell>
            <Box sx={{width:"100%",minWidth:"250px",display:"flex"}}><CartImage src={products[0].images}/></Box>
            </TableCell>
            <TableCell>Bag</TableCell>
            <TableCell>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, incidunt!</TableCell>
            <TableCell>XL</TableCell>
            <TableCell>$5.8</TableCell>
            <TableCell>Male</TableCell>
            <TableCell><IconButton LinkComponent={Link} to='/admin/editdata'><EditIcon/></IconButton></TableCell>
            <TableCell><IconButton ><DeleteIcon/></IconButton></TableCell>
            </TableRow>
            <TableRow>
            <TableCell>
            <Box sx={{width:"100%",minWidth:"250px",display:"flex"}}><CartImage src={products[0].images}/></Box>
            </TableCell>
            <TableCell>Bag</TableCell>
            <TableCell>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, incidunt!</TableCell>
            <TableCell>XL</TableCell>
            <TableCell>$5.8</TableCell>
            <TableCell>Male</TableCell>
            <TableCell><IconButton LinkComponent={Link} to='/admin/editdata'><EditIcon/></IconButton></TableCell>
            <TableCell><IconButton ><DeleteIcon/></IconButton></TableCell>
            </TableRow>
            <TableRow>
            <TableCell>
            <Box sx={{width:"100%",minWidth:"250px",display:"flex"}}><CartImage src={products[0].images}/></Box>
            </TableCell>
            <TableCell>Bag</TableCell>
            <TableCell>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, incidunt!</TableCell>
            <TableCell>XL</TableCell>
            <TableCell>$5.8</TableCell>
            <TableCell>Male</TableCell>
            <TableCell><IconButton LinkComponent={Link} to='/admin/editdata'><EditIcon/></IconButton></TableCell>
            <TableCell><IconButton ><DeleteIcon/></IconButton></TableCell>
            </TableRow>
            <TableRow>
            <TableCell>
            <Box sx={{width:"100%",minWidth:"250px",display:"flex"}}><CartImage src={products[0].images}/></Box>
            </TableCell>
            <TableCell>Bag</TableCell>
            <TableCell>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, incidunt!</TableCell>
            <TableCell>XL</TableCell>
            <TableCell>$5.8</TableCell>
            <TableCell>Male</TableCell>
            <TableCell><IconButton LinkComponent={Link} to='/admin/editdata'><EditIcon/></IconButton></TableCell>
            <TableCell><IconButton ><DeleteIcon/></IconButton></TableCell>
            </TableRow>
            <TableRow>
            <TableCell>
            <Box sx={{width:"100%",minWidth:"250px",display:"flex"}}><CartImage src={products[0].images}/></Box>
            </TableCell>
            <TableCell>Bag</TableCell>
            <TableCell>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, incidunt!</TableCell>
            <TableCell>XL</TableCell>
            <TableCell>$5.8</TableCell>
            <TableCell>Male</TableCell>
            <TableCell><IconButton LinkComponent={Link} to='/admin/editdata'><EditIcon/></IconButton></TableCell>
            <TableCell><IconButton ><DeleteIcon/></IconButton></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    <DashboardFooter/>
    </ParentContain>
    </>
  )
}

export default DProducts;