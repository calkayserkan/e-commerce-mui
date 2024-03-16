import { Button, Grid, Input } from "@mui/joy";

function CartCoupon() {
  return (
    <Grid container
      sx={{
        width: "100%",
        height: "6vh",
        // border: ".5px solid #04364A",
        borderTop: ".5px solid #04364A",
        py: 1,
        px: 3,
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Grid container sx={{gap:1}}>
        <Input sx={{background:"#04364A"}} placeholder="Write Coupon" variant="solid" />
        <Button sx={{background:"#04364A"}}>Apply</Button>
      </Grid>
      <Grid container sx={{gap:1}}>
        <Button color="danger">Update Cart</Button>
      </Grid>
    </Grid>
  );
}

export default CartCoupon;
