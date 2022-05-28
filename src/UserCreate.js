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

   const handleSubmit = (event)=>{
     event.preventDefault()
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    var raw = JSON.stringify({
      "fname": fname,
      "lname": lname,
      "username": username,
      "email": email,
      "avatar": avatar
    });
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    fetch("https://www.mecallapi.com/api/users/create", requestOptions)
      .then(response => response.json())
      .then(result => {
        alert(result['message'])
        if(result['status']==='ok'){
          window.location.href  ='/'
        }
      })
      .catch(error => console.log('error', error));
   }

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm" sx={{pa:2}}>
          <Typography variant="h6" gutterBottom component="div">
               Create Users
            </Typography>
            <form onSubmit={handleSubmit}>
               <Grid container spacing={2}>
                 <Grid item xs={12} > 
                   <TextField id="fname" label="Firstname" variant="outlined" fullWidth required onChange={(e)=>setFname(e.target.value)}/>
                 </Grid>
                 <Grid item xs={12} sm={6}> 
                   <TextField id="lname" label="lastname" variant="outlined" fullWidth required onChange={(e)=>setLname(e.target.value)}/>
                 </Grid>
                 <Grid item xs={12} sm={6}> 
                   <TextField id="username" label="username" variant="outlined" fullWidth required onChange={(e)=>setUsername(e.target.value)}/>
                 </Grid>
                 <Grid item xs={12} > 
                   <TextField id="email" label="Email" variant="outlined" fullWidth required onChange={(e)=>setEmail(e.target.value)} />
                 </Grid>
                 <Grid item xs={12}> 
                   <TextField id="avatar" label="avatar" variant="outlined" fullWidth required onChange={(e)=>setAvatar(e.target.value)}/>
                 </Grid>
                 <Grid item xs={12}> 
                  <Button  type="submit"  variant="contained" fullWidth>Create</Button>
                 </Grid>
               </Grid>
            </form>
      </Container>
    </React.Fragment>
  );
}
