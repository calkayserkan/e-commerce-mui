import { Box, Grid } from "@mui/joy";
import CartProgress from "./CartProgress";
import CartTable from "./CartTable";
import CartCoupon from "./CartCoupon";
import CartTotals from "./CartTotals";

function Cart() {
  return (
    <Grid
      container
      xs={8}
      sx={{
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        minHeight: "90vh",
        background: "#04364A",
      }}
    >
      <Grid
        container
        xs={8}
        sx={{ justifyContent: "center", alignItems: "center" }}
      >
        <Box
          sx={{
            width: "85%",
            minHeight:"70vh",
            background: "#176B87",
            borderRadius: 15,
            boxShadow: "0px 0px 25px rgba(0,0,0,1)",
            display:"flex",
            flexDirection: "column",
            justifyContent: "space-between",
            p:2.5,
            alignItems:"center"
          }}
        >
          <CartProgress />
          <CartTable />
          <CartCoupon />
        </Box>
      </Grid>
      <Grid
        container
        xs={4}
        sx={{ justifyContent: "center", alignItems: "center" }}
      >
        <Box
          sx={{
            width: "60%",
            height: "70vh",
            background: "#176B87",
            borderRadius: 15,
            boxShadow: "0px 0px 25px rgba(0,0,0,1)",
            display:"flex",
            flexDirection: "column",
            justifyContent: "start",
            alignItems:"center",
            p:2.5,
          }}
        >
          <CartTotals />
        </Box>
      </Grid>
    </Grid>
  );
}

export default Cart;
