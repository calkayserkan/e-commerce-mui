import { Box, Button, Checkbox, Divider, Link, Typography } from "@mui/joy";

function CartTotals() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 5,
        width: "100%",
        mt: 5,
      }}
    >
      <Typography level="h3" sx={{ color: "#04364A" }}>
        Cart Totals
      </Typography>
      <Divider sx={{ width: "100%", background: "#04364A" }} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Typography level="title-lg" sx={{ color: "#04364A" }}>
          SubTotal
        </Typography>
        <Typography level="title-lg" sx={{ color: "#04364A" }}>
          $208.00
        </Typography>
      </Box>
      <Divider sx={{ width: "100%", background: "#04364A" }} />

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Typography level="title-lg" sx={{ color: "#04364A" }}>
          Taxes
        </Typography>
        <Typography level="title-lg" sx={{ color: "#04364A" }}>
          $10.00
        </Typography>
      </Box>
      <Divider sx={{ width: "100%", background: "#04364A" }} />

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Typography level="title-lg" sx={{ color: "#04364A" }}>
          Shipping
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "start",
            gap: 1,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              gap: 1,
            }}
          >
            <Typography level="body-lg" sx={{ color: "#04364A" }}>
              Fast Cargo: $15.00
            </Typography>
            <Checkbox />
          </Box>
          <Link color="danger">Change Address</Link>
        </Box>
      </Box>
      <Divider sx={{ width: "100%", background: "#04364A" }} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Typography level="title-lg" sx={{ color: "#04364A" }}>
          Total
        </Typography>
        <Typography level="title-lg" sx={{ color: "#04364A" }}>
          $218.00
        </Typography>
      </Box>
      <Button color="success"> Proceed to checkout </Button>
    </Box>
  );
}

export default CartTotals;
