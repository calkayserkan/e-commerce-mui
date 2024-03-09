import { Box, Button, Grid, Textarea, Typography } from "@mui/joy";
import { useState } from "react";
import appStore from "../../../assets/footer/app-store.png";
import googlePlay from "../../../assets/footer/google-play.png";
function Subscribe() {
  const [text, setText] = useState("");

  return (
    <Grid
      container
      sx={{
        width: "100%",
        height: "40%",
        background: "#04364A",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          height: "65%",
          maxWidth: "550px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography level="h2" sx={{ color: "#DAFFFB" }}>
            Get our emails for info on new items, sales and more.
          </Typography>
          <Typography level="body-md" sx={{ color: "#DAFFFB" }}>
            We`ll email you a voucher worth $10 off your first order over $50.
          </Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          <Textarea
            placeholder="Enter Your Email Address"
            value={text}
            onChange={(event) => setText(event.target.value)}
            minRows={1}
            maxRows={2}
            sx={{ minWidth: 300 }}
            endDecorator={
              <Button
                level="body-xs"
                sx={{ ml: "auto", background: "#04364A" }}
              >
                Subscribe
              </Button>
            }
          />
          <Typography level="body-xs" sx={{ color: "#DAFFFB" }}>
            By subscribing you agree to our Terms & Conditions and Privacy &
            Cookies Policy.
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          height: "65%",
          maxWidth: "550px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography level="h2" sx={{ color: "#DAFFFB" }}>
            Need help? <br />
            (+90) 123 456 78 90
          </Typography>
          <Typography level="body-xs" sx={{ color: "#DAFFFB" }}>
            We are available 8:00am – 7:00pm
          </Typography>
        </Box>
        <Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "start",
              alignItems: "center",
            }}
          >
            <img src={appStore}></img>
            <img src={googlePlay}></img>
          </Box>
          <Box>
            <Typography level="body-xs" sx={{ color: "#DAFFFB" }}>
              <strong>Shopping App:</strong> Try our View in Your Room feature,
              manage registries and save payment info.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
}

export default Subscribe;
