import { Grid, Typography } from "@mui/joy";
import Marquee from "react-fast-marquee";

import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import PaymentIcon from "@mui/icons-material/Payment";

function Policy() {
  return (
    <Grid
      sx={{
        width: "100%",
        height: "10%",
        background: "#DAFFFB",
        overflowX: "hidden",
        zIndex:99
      }}
    >
      <Marquee style={{marginTop:17.5}}>
        <Grid
          container
          sx={{
            width: "100%",
            height: "100%",
            gap: 35,
          }}
        >
          <Grid container sx={{ alignItems: "center", gap: 2 }}>
            <LocalShippingOutlinedIcon sx={{ width: "auto", height: "55px" }} />
            <Typography>
              {" "}
              <strong>FREE DELIVERY</strong> <br /> From $59.89
            </Typography>
          </Grid>
          <Grid container sx={{ alignItems: "center", gap: 2 }}>
            <SupportAgentIcon sx={{ width: "auto", height: "55px" }} />
            <Typography>
              {" "}
              <strong>SUPPORT 24/7</strong> <br /> Online 24 hours
            </Typography>
          </Grid>
          <Grid container sx={{ alignItems: "center", gap: 2 }}>
            <RestartAltIcon sx={{ width: "auto", height: "55px" }} />
            <Typography>
              {" "}
              <strong>30 DAYS RETURN</strong> <br /> Simply return it within 30
              days
            </Typography>
          </Grid>
          <Grid container sx={{ alignItems: "center", gap: 2 }}>
            <PaymentIcon sx={{ width: "auto", height: "55px" }} />
            <Typography>
              {" "}
              <strong>PAYMENT METHOD</strong> <br /> Secure Payment
            </Typography>
          </Grid>
        </Grid>
      </Marquee>
    </Grid>
  );
}

export default Policy;
