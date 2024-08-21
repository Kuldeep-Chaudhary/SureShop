import React from 'react'
import { Button, FormControl, TextField } from "@mui/material";
import { LoginCard, LoginContainer, LoginTitle } from '../styles/login';
import { Colors } from '../styles/theme';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <LoginContainer>
            <LoginCard>
                <LoginTitle variant='h5'>Login Form</LoginTitle>
                <FormControl fullWidth  sx={{marginBottom:"15px",background:Colors.white,borderRadius:"5px"}}>
                <TextField id="email" label=" Email" variant="outlined" />
                </FormControl>
                <FormControl fullWidth  sx={{marginBottom:"15px",background:Colors.white,borderRadius:"5px"}}>
                <TextField id="password" label=" password" variant="outlined" />
                </FormControl>
                <Button  type="submit"  variant="contained" LinkComponent={Link} to='/admin/dashboard' sx={{
                        padding:"10px 20px",
                    }}> Login</Button>
            </LoginCard>
        </LoginContainer>
  )
}

export default Login