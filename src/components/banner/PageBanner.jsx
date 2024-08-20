import { Container, Typography } from '@mui/material'
import React from 'react'
import { Colors } from '../../styles/theme';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';


const PageBanner = ({heading , breadcrumbLinks }) => {
  return (
    <>
    <Container sx={{
                    display:"flex",
                    justifyContent:"center",
                    alignItems:"center",
                    flexDirection:"column",
                    background:Colors.light_gray,
                    py:3
    }}>
       
        <Typography variant='h4'  color={Colors.secondary}>{heading}</Typography>
        
        <Breadcrumbs aria-label="breadcrumb">
        {breadcrumbLinks.map((link, index) => (
          index === breadcrumbLinks.length - 1 ? (
            <Typography key={index} color="text.primary">
              {link.label}
            </Typography>
          ) : (
            <Link key={index} underline="hover" color="inherit" href={link.href}>
              {link.label}
            </Link>
          )
        ))}
      </Breadcrumbs>
      


    </Container>
    </>
  )
}

export default PageBanner