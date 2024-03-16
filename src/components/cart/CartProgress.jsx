import { Box, LinearProgress, Typography } from "@mui/joy";

function CartProgress() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "6vh",
        border: ".5px solid #04364A",
        py: 1,
        px: 3,
        borderRadius: 10,
      }}
    >
      <Typography level="title-sm" sx={{color:"#04364A"}}>
        Add <strong>$161.00</strong> to cart and get free shipping!
      </Typography>
      <LinearProgress determinate value={25} variant="outlined" sx={{mt:1.1,color:"#04364A",borderColor:"#04364A"}}/>
    </Box>
  );
}

export default CartProgress;
