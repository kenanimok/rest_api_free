import * as React from 'react';
import { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Typography,Grid, Button } from '@mui/material';
import TextField from '@mui/material/TextField';



export default function UsersCreate() {
   const [fname,setFname]=useState("");
   const [lname,setLname]=useState("");
   const [username,setUsername]=useState("");
   const [email,setEmail]=useState("");
   const [avatar,setAvatar]=useState("");

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm" sx={{pa:2}}>
          <Typography variant="h6" gutterBottom component="div">
               Create Users
            </Typography>
            <form>
               <Grid container spacing={2}>
                 <Grid item xs={12} > 
                   <TextField id="fname" label="Firstname" variant="outlined" fullWidth required/>
                 </Grid>
                 <Grid item xs={12} sm={6}> 
                   <TextField id="lname" label="lastname" variant="outlined" fullWidth required/>
                 </Grid>
                 <Grid item xs={12} sm={6}> 
                   <TextField id="username" label="username" variant="outlined" fullWidth required/>
                 </Grid>
                 <Grid item xs={12} sm={6}> 
                   <TextField id="email" label="Email" variant="outlined" fullWidth required/>
                 </Grid>
                 <Grid item xs={12}> 
                   <TextField id="avatar" label="avatar" variant="outlined" fullWidth required/>
                 </Grid>
                 <Grid item xs={12}> 
                  <Button variant="contained" fullWidth>Create</Button>//
                 </Grid>
               </Grid>
            </form>
      </Container>
    </React.Fragment>
  );
}
