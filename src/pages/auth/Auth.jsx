import { Box, Divider, Grid, Input, Typography } from "@mui/joy";
import notFound from "../../assets/notfound/notFound.webp";

function Auth() {
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
      <Grid
        container
        sx={{
          width: "40%",
          height: "100%",
          mixBlendMode: "hard-light",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "80%",
            height: "85%",
            background: "rgba(0,100,0,.5)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "0px 0px 25px rgba(0,0,0,1)",
            borderRadius: 15,
            gap: 7.5,
          }}
        >
          <Typography level="title-lg" sx={{ color: "white" }}>Sign in</Typography>
          <Input placeholder="Try to submit with no text!" required />
          <Input placeholder="Try to submit with no text!" required />
          <Divider
            sx={{
              background: "black",
              color: "white",
              height:"1px",
              width:"75%",
              alignSelf: "center",
            }}
          >
            Or
          </Divider>
          <Grid container sx={{ gap: 15, color: "white" }}>
            <Box>Google</Box>
            <Box>Facebook</Box>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Auth;
