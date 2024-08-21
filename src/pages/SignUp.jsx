import React from 'react'
import { LoginCard, LoginContainer, LoginTitle } from '../styles/login'
import { Button, FormControl, TextField } from "@mui/material";
import { Colors } from '../styles/theme';

const SignUp = () => {
  return (
    <LoginContainer>
        <LoginCard>
        <LoginTitle variant='h5'>Sign UP</LoginTitle>
                <FormControl fullWidth  sx={{marginBottom:"15px",background:Colors.white,borderRadius:"5px"}}>
                <TextField id="name" label=" Name" variant="outlined" />
                </FormControl>
                <FormControl fullWidth  sx={{marginBottom:"15px",background:Colors.white,borderRadius:"5px"}} >
                <TextField id="email" label=" Email" variant="outlined" />
                </FormControl>
                <FormControl fullWidth  sx={{marginBottom:"15px",background:Colors.white,borderRadius:"5px"}}>
                <TextField id="password" label=" password" variant="outlined" />
                </FormControl>
                <FormControl fullWidth  sx={{marginBottom:"15px",background:Colors.white,borderRadius:"5px"}}>
                <TextField id="confirmPassword" label="Confirm password" variant="outlined" />
                </FormControl>
                <Button  type="submit"  variant="contained" sx={{
                        padding:"10px 20px",
                    }}> SignUp</Button>

        </LoginCard>
    </LoginContainer>
  )
}

export default SignUp