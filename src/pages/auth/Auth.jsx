import { Box, Button, Grid, Typography } from "@mui/joy";
import notFound from "../../assets/notfound/notFound.webp";
import Login from "../../components/auth/Login";
import { useState } from "react";
import Register from "../../components/auth/Register";

function Auth() {
  const [value,setValue] = useState(true)
  return (
    <Grid
      container
      sx={{
        width: "100%",
        height: "90vh",
        backgroundImage: `url(${notFound})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        justifyContent: "start",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "30%",
          height: "100%",
          ml: { xs: 0, sm: 10 },
          mixBlendMode: "hard-light",
          display:"flex",
          flexDirection:"column",
          justifyContent: "center",
          alignItems: "center",
          background: "rgba(0,100,0,.5)",
          boxShadow: "0px 25px 0px 25px 25px rgba(0,0,0,1)",
          backdropFilter: "blur(3px)",
        }}
      >
        <Box sx={{flexBasis:"50%"}}>
          {value === true ? <Login /> : <Register/>}
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 3,
          }}
        >
          <Typography sx={{ color: "white", flexBasis:"50%" }}>
          {value === true ? "You don't have an account" : "You already have an account"}
            
          </Typography>
          <Button onClick={()=> setValue(!value)} sx={{ background: "white", color: "black" }}>{value === true ? "Sign up" : "Sign in"}</Button>
        </Box>
      </Box>
    </Grid>
  );
}

export default Auth;
