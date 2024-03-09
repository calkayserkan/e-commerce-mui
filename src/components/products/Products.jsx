import { Card, CardContent, Grid, Typography } from "@mui/joy";

function Products() {
  function createData(title) {
    return { title };
  }
  const productItems = [
    createData("Smartphone"),
    createData("Watches"),
    createData("Electronics"),
    createData("Furniture"),
    createData("Collections"),
    createData("Fashion"),
  ];
  return (
    <Grid
      container
      sx={{
        justifyContent: "center",
        alignItems: "start",
        width: "100%",
        height: "50vh",
        background: "#04364A",
      }}
    >
      <Grid
        container
        sx={{
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "40vh",
          background: "#176B87",
          boxShadow: "0px 0px 30px rgba(0,0,0,0.5)",
          gap: 5,
        }}
      >
        {productItems.map((item, key) => (
          <Card
            key={key}
            sx={{
              width: "250px",
              height: "300px",
              boxShadow: "0px 0px 20px rgba(0,0,0,0.5)",
              border: 0,
              overflow: "hidden",
              background: "#04364A",
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
  );
}

export default Products;
