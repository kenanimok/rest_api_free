import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ButtonGroup from '@mui/material/ButtonGroup';


import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useState ,useEffect} from "react";
import { FiveG } from "@mui/icons-material";
import Avatar from '@mui/material/Avatar';
import Link from '@mui/material/Link';






export default function Users() {

      
   const [items,setItems] = useState([]);
//    const [isLoaded,setIsLoaded]= useState(false);
//    const [error,setError]=useState(null)

   useEffect(()=>{
     UserGet()
 
   },[])


   const UserGet= ()=>{
    fetch("https://www.mecallapi.com/api/users")
    .then(res=> res.json())
    .then(
        (result)=>{
            // setIsLoaded(true);
            setItems(result);
    
        }
        ,
        // (error)=>{
        //     setIsLoaded(true);
        //     setError(error);
        // }
    )
   }


   const UserDelete = id =>{

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "id": id
    });

    var requestOptions = {
      method: 'DELETE',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("https://www.mecallapi.com/api/users/delete", requestOptions)
      .then(response => response.json())
      .then(result => {
        alert(result['message'])
         if(result['status']==='ok'){
           UserGet()
         }
      })
      .catch(error => console.log('error', error));

   }

   const UserUpdate = id =>{
      window.location='/update/'+id
   }

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg" sx={{ p: 2 }}>
        <Paper elevation={3} />
        <Box display="flex">
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h6" gutterBottom component="div">
              {" "}
              Users
            </Typography>
          </Box>
          <Box sx={{p:2}}>
            <Link href="create">
                <Button variant="contained">Add user</Button>
            </Link>
          </Box>
        </Box>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell align="right"></TableCell>
                <TableCell align="right">Fist Name</TableCell>
                <TableCell align="right">Last Name</TableCell>
                <TableCell align="right">Username</TableCell>
                <TableCell align="right">Action</TableCell>

              </TableRow>
            </TableHead>
            <TableBody>
              {items.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell align="right"><Avatar alt="Remy Sharp" src={row.avatar} /></TableCell>
                  <TableCell align="right">{row.fname}</TableCell>
                  <TableCell align="right">{row.lname}</TableCell>
                  <TableCell align="right">{row.username}</TableCell>
                  <TableCell align="right">
                    <ButtonGroup variant="contained" aria-label="outlined primary button group">
                        <Button onClick={()=>UserUpdate(row.id)}>Edit</Button>

                        <Button onClick={()=>UserDelete(row.id)}>Del</Button>
                    </ButtonGroup>
                  </TableCell>


                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Paper />
      </Container>
    </React.Fragment>
  );
}
