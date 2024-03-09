import { Box, Grid, Typography } from "@mui/joy";
// import image from "../../assets/categories/categories1.png"
function Campaigns() {
    function createData(title, gxs) {
        return { title, gxs };
      }
      const campaignItems = [
        createData("Smartphone",5),
        createData("Watches",5),
        createData("Electronics",7),
        createData("Furniture",3),
      ];
  return (
    <Box
      sx={{
        width: "100%",
        height: "90vh",
        background: "#04364A",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "start",
      }}
    >
      <Box
        sx={{
          background: "#176B87",
          width: "80%",
          height: "90%",
          borderRadius: 15,
          boxShadow: "0px 0px 30px rgba(0,0,0,.5)",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            pt: 1,
            height: "15%",
          }}
        >
          <Typography level="h2" sx={{ color: "#DAFFFB" }}>
            Campaigns
          </Typography>
        </Box>
        <Grid
          container
          sx={{
            width: "100%",
            height: "85%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid
            container
            spacing={2}
            sx={{ justifyContent: "center", alignItems: "center", gap: 5 , flexGrow:1 }}
          >
            {campaignItems.map((item, key) => (
              <Grid
                key={key}
                xs={item.gxs}
                sx={{
                  height: "300px",
                  // backgroundImage: `url(${image})`,
                  // backgroundRepeat: "no-repeat",
                  // backgroundSize: "cover",
                  // backgroundPosition: "center",
                  boxShadow: "0px 0px 20px rgba(0,0,0,0.5)",
                  border:0,
                  overflow: "hidden",
                  background:"#04364A",
                  borderRadius:20,
                }}
              >
                <Box
                  sx={{
                    textAlign: "center",
                    width: "100%",
                    height: "100%",
                    background: "linear-gradient(0deg,#DAFFFB,#176B87)",
                    display:"flex",
                    flexDirection:"row",
                    justifyContent:"center",
                    alignItems:"center",
                    borderRadius:15,
                  }}
                >
                  <Typography level="h3" sx={{color:"#04364A",textShadow:"0px 0px 2px rgba(255,255,255,.5)"}}>{item.title}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default Campaigns