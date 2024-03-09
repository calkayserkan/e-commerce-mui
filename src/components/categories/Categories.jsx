import { Box, Card, CardContent, Grid, Typography } from "@mui/joy";

import categoryImage1 from "../../assets/categories/categories1.png";
import categoryImage2 from "../../assets/categories/categories2.png";
import categoryImage3 from "../../assets/categories/categories3.png";
import categoryImage4 from "../../assets/categories/categories4.png";
import categoryImage5 from "../../assets/categories/categories5.png";
import categoryImage6 from "../../assets/categories/categories6.png";

function Categories() {
  function createData(image, title) {
    return { image, title };
  }
  const categoryItems = [
    createData(categoryImage1, "Smartphone"),
    createData(categoryImage2, "Watches"),
    createData(categoryImage3, "Electronics"),
    createData(categoryImage4, "Furniture"),
    createData(categoryImage5, "Collections"),
    createData(categoryImage6, "Fashion"),
  ];
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        background: "#04364A",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          background: "#176B87",
          width: "80%",
          height: "80%",
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
            All Categories
          </Typography>
          <Typography level="title-lg" sx={{ color: "#DAFFFB" }}>
            Summer Collection New Morden Design
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
            sx={{ justifyContent: "center", alignItems: "center", gap: 5 }}
          >
            {categoryItems.map((item, key) => (
              <Card
                key={key}
                sx={{
                  width: "300px",
                  height: "300px",
                  boxShadow: "0px 0px 20px rgba(0,0,0,0.5)",
                  border: "7.5px solid #04364A",
                  overflow: "hidden",
                  background: "#04364A",
                  borderRadius: 15,
                  transition: "1s ease-out",
                  "&:hover": {
                    border: "7.5px solid #DAFFFB",
                  },
                }}
              >
                <CardContent
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    textAlign: "center",
                    width: "100%",
                    height: "100%",
                    background: "linear-gradient(0deg,#DAFFFB,#176B87)",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    
                  }}
                >
                  <Typography
                    level="h3"
                    sx={{
                      color: "#04364A",
                      textShadow: "0px 0px 2px rgba(255,255,255,.5)",
                    }}
                  >
                    {item.title}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default Categories;
