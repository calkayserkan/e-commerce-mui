import { Grid } from "@mui/joy";
import Marquee from "react-fast-marquee";
import brand1 from "../../assets/brands/brand1.png";
import brand2 from "../../assets/brands/brand2.png";
import brand3 from "../../assets/brands/brand3.png";
import brand4 from "../../assets/brands/brand4.png";
import brand5 from "../../assets/brands/brand5.png";

function Brands() {
  function createData(image) {
    return { image };
  }
  const brandItems = [
    createData(brand1),
    createData(brand2),
    createData(brand3),
    createData(brand4),
    createData(brand5),
  ];
  return (
    <Grid
      container
      sx={{
        justifyContent: "center",
        alignItems: "center",
        height: "11vh",
        width: "100%",
        background: "#04364A",
      }}
    >
      <Grid
        sx={{
          width: "100%",
          height: "10vh",
          background: "#DAFFFB",
          overflowX: "hidden",
        }}
      >
        <Marquee direction="right" style={{ marginTop: 17.5 }}>
          <Grid
            container
            sx={{
              width: "100%",
              height: "100%",
              gap: 35,
            }}
          >
            {brandItems.map((item, key) => (
              <Grid key={key} container sx={{ alignItems: "center", gap: 2 }}>
                <img src={item.image}></img>
              </Grid>
            ))}
          </Grid>
        </Marquee>
      </Grid>
    </Grid>
  );
}

export default Brands;
