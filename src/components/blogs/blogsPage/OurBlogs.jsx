import {
  AspectRatio,
  Box,
  Button,
  Card,
  CardContent,
  CardOverflow,
  Grid,
  Typography,
} from "@mui/joy";

import blog3 from "../../../assets/blogs/blog3.jpg";

function OurBlogs() {
  function createData(title, desc, img) {
    return { title, desc, img };
  }
  const blogItems = [
    createData("Aliquam hendrerit mi metus", "25 Feb, 2021 - Comments", blog3),
    createData("Aliquam hendrerit mi metus", "25 Feb, 2021 - Comments", blog3),
    createData("Aliquam hendrerit mi metus", "25 Feb, 2021 - Comments", blog3),
    createData("Aliquam hendrerit mi metus", "25 Feb, 2021 - Comments", blog3),
    createData("Aliquam hendrerit mi metus", "25 Feb, 2021 - Comments", blog3),
    createData("Aliquam hendrerit mi metus", "25 Feb, 2021 - Comments", blog3),
    createData("Aliquam hendrerit mi metus", "25 Feb, 2021 - Comments", blog3),
    createData("Aliquam hendrerit mi metus", "25 Feb, 2021 - Comments", blog3),
  ];

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "90vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "center",
        background: "#04364A"
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          alignItems: "center",
          mt: 5,
        }}
      >
        <Typography level="h1" sx={{color:"#DAFFFB"}}>From Our Blog</Typography>
        <Typography level="title-lg" sx={{color:"#DAFFFB"}}>
          Summer Collection New Modern Design
        </Typography>
      </Box>
      <Grid
        container
        xs={12}
        sx={{ justifyContent: "center", alignItems: "center", gap: 5, my: 5 }}
      >
        {blogItems.map((item, key) => (
          <Grid
            key={key}
            xs={10}
            sm={5}
            md={4}
            lg={3}
            sx={{
              maxHeight: "400px",
              boxShadow: "0px 0px 20px rgba(0,0,0,1)",
              border: "7.5px solid #176B87",
              overflow: "hidden",
              background: "#04364A",
              borderRadius: 20,
              ml: 3,
            }}
          >
            <Card
              sx={{
                textAlign: "center",
                width: "100%",
                height: "100%",
                background: "linear-gradient(0deg,#DAFFFB,#176B87)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 15,
                border: "0",
              }}
            >
              <CardOverflow>
                <AspectRatio ratio="2">
                  <img src={item.img}></img>
                </AspectRatio>
              </CardOverflow>
              <CardContent>
                <Typography
                  level="h3"
                  sx={{
                    color: "#04364A",
                    textShadow: "0px 0px 2px rgba(255,255,255,.5)",
                  }}
                >
                  {item.title}
                </Typography>
                <Typography level="body-sm">{item.desc}</Typography>
              </CardContent>
              <CardOverflow>
                <CardContent>
                  <Button
                    sx={{ background: "#04364A", mb: 2, color: "#DAFFFB" }}
                  >
                    Read More
                  </Button>
                </CardContent>
              </CardOverflow>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default OurBlogs;
