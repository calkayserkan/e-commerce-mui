import { Box, Button, Divider, Grid, Input, Typography } from "@mui/joy";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
function Login() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 5,
      }}
    >
      <Typography level="title-lg" sx={{ color: "white" }}>
        Sign in
      </Typography>
      <Input placeholder="E-mail" required />
      <Input placeholder="Password" required />
      <Button sx={{ background: "white", color: "black" }}>Sign in</Button>
      <Divider
        sx={{
          background: "black",
          color: "white",
          height: "1px",
          width: "75%",
          alignSelf: "center",
        }}
      >
        Or
      </Divider>
      <Grid container sx={{ gap: 15, color: "white", flexWrap: "wrap" }}>
        <Button sx={{ background: "white", color: "black", gap: 1 }}>
          <GoogleIcon /> Google
        </Button>
        <Button sx={{ background: "white", color: "black", gap: 1 }}>
          <FacebookIcon /> Facebook
        </Button>
      </Grid>
    </Box>
  );
}

export default Login;
