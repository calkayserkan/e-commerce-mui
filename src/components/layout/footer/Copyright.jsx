import { Box, Grid, Link, Typography } from "@mui/joy"
import cards from "../../../assets/footer/cards.png";

function Copyright() {
  return (
    <Box
        sx={{
          width: "100%",
          height: { xs: "15vh", md: "10%" },
          // background: "#DAFFFB",
          background:"#04364A",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          flexWrap: { xs: "wrap", md: "nowrap" },
          textAlign: "center",
          gap: { xs: 1, md: 0 },
        }}
      >
        <Grid container sx={{ gap: 2, justifyContent: "center" }}>
          <Typography sx={{color:"#DAFFFB"}}>
            Copyright 2024 © E-Commerce Theme. All right reserved. Powered by
            Serkan Çalkay.
          </Typography>
          <img src={cards}></img>
        </Grid>
        <Grid container sx={{ gap: 2, justifyContent: "center" }}>
          <Link sx={{color:"#DAFFFB"}} href="#basics">Privacy Policy</Link>
          <Link sx={{color:"#DAFFFB"}} href="#basics">Terms and Conditions</Link>
          <Link sx={{color:"#DAFFFB"}} href="#basics">Returns Policy</Link>
        </Grid>
      </Box>
  )
}

export default Copyright