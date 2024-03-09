import { Box, Button, Grid, Typography } from "@mui/joy";

function CampaignSingle() {
  return (
    <Grid
      container
      sx={{
        width: "100%",
        height: "40vh",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        background: "#04364A",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          alignItems: "center",
          gap: 5,
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "start",
            alignItems: "center",
            gap: 2.5,
          }}
        >
          <Typography sx={{ color: "#DAFFFB" ,fontSize:"40px"}}>
            New Season Sale
          </Typography>
          <Typography level="title-lg" sx={{ color: "#DAFFFB" ,fontSize:"70px"}}>
            40% OFF
          </Typography>
        </Box>

        <Button sx={{background:"#DAFFFB",color:"#04364A"}}>Shop Now</Button>
      </Box>
    </Grid>
  );
}

export default CampaignSingle;
