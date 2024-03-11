import {
  Box,
  FormControl,
  FormLabel,
  Grid,
  Input,
  Textarea,
  Typography,
} from "@mui/joy";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
function Contact() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "120vh",
        overflow: "hidden",
        background: "#04364A",
      }}
    >
      <Grid sx={{ overflow: "hidden", width: "100vw", height: "50vh" }}>
        <MapContainer
          center={[41.01, 29.0007]}
          style={{ height: 600 }}
          zoom={13}
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://tile.thunderforest.com/atlas/{z}/{x}/{y}.png?apikey=d55684de82e14482b72681787f5c76e6"
          />
          <Marker position={[41.01, 28.979]}>
            <Popup>
              Turkey <br /> İstanbul
            </Popup>
          </Marker>
        </MapContainer>
      </Grid>

      <Box
        sx={{
          width: "100%",
          height: "70vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 5,
        }}
      >
        <Box
          sx={{
            width: "93%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "start",
            textAlign: "left",
            gap: 1,
          }}
        >
          <Typography
            level="title-lg"
            sx={{color: "#DAFFFB", textAlign: "left" }}
          >
            Contact With Us
          </Typography>
          <Typography
            level="h1"
            sx={{color: "#64CCC5", textAlign: "left" }}
          >
            Get In Touch
          </Typography>
          <Typography
            level="body-sm"
            sx={{ width: "45%", color: "#DAFFFB", textAlign: "left" }}
          >
            In hac habitasse platea dictumst. Pellentesque viverra sem nec orci
            lacinia, in bibendum urna mollis. Quisque nunc lacus, varius vel leo
            a, pretium lobortis metus. Vivamus consectetur consequat justo.
          </Typography>
        </Box>
        <Grid
          xs={12}
          container
          sx={{ justifyContent: "center", alignItems: "center", gap: 5 }}
        >
          <Grid container xs={6} sx={{gap:2}}>
            <Grid xs={5.9}>
              <FormControl>
                <FormLabel sx={{color:"#DAFFFB"}}>Your Name</FormLabel>
                <Input placeholder="Placeholder" />
              </FormControl>
            </Grid>
            <Grid xs={5.9}>
              <FormControl>
                <FormLabel sx={{color:"#DAFFFB"}}>Your Email</FormLabel>
                <Input placeholder="Placeholder" />
              </FormControl>
            </Grid>
            <Grid xs={12}>
              <FormControl>
                <FormLabel sx={{color:"#DAFFFB"}}>Subject</FormLabel>
                <Input placeholder="Placeholder" />
              </FormControl>
            </Grid>
            <Grid xs={12}>
              <FormControl>
                <FormLabel sx={{color:"#DAFFFB"}}>Your Message</FormLabel>
                <Textarea minRows={3} placeholder="Placeholder" />
              </FormControl>
            </Grid>
          </Grid>
          <Grid xs={5} sx={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"start",gap:2}}>
            <Typography level="h4" sx={{ color: "#64CCC5" ,mt:3}}>
              Clotya Store
            </Typography>
            <Typography sx={{ color: "#64CCC5" }}>
              Clotya Store Germany — 785 15h Street, Office 478/B Green Mall
              Berlin, De 81566
            </Typography>
            <Typography sx={{ color: "#64CCC5" }}>
              Phone: +1 1234 567 88 <br /> Email: contact@example.com
            </Typography>
            <Typography level="h4" sx={{ color: "#64CCC5", mt: 1 }}>
              Opening Hours
            </Typography>
            <Typography sx={{ color: "#64CCC5" }}>
              Monday - Friday : 9am - 5pm <br /> Weekend Closed
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default Contact;
