import { Box, Typography } from "@mui/joy"

function BrandInfo() {
    function createData(title, item1, item2, item3, item4, item5) {
        return { title, item1, item2, item3, item4, item5 };
      }
    
      const footerData = [
        createData(
          "Information",
          "About Us",
          "Privacy Policy",
          "Returns Policy",
          "Shipping Policy",
          "Dropshipping"
        ),
        createData(
          "Account",
          "Dashboard",
          "My Orders",
          "My Wishlist",
          "Account details",
          "Track My Orders"
        ),
        createData(
          "Shop",
          "Affiliate",
          "Bestsellers",
          "Discount",
          "Latest Products",
          "Sale Products"
        ),
        createData("Categories", "Women", "Men", "Bags", "Outerwear", "Shoes"),
      ];
  return (
    <Box
        sx={{
          width: "100%",
          height: "40%",
          background: "#DAFFFB",
          color: "#04364A",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "350px",
            gap: 5,
          }}
        >
          <Typography level="h1">Logo</Typography>
          <Typography>
            Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
            maecenas accumsan lacus vel facilisis in termapol.
          </Typography>
          <Typography> (+800) 1234 5678 90 - info@example.com</Typography>
        </Box>
        {footerData.map((data, key) => (
          <Box
            key={key}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2.5,
            }}
          >
            <Typography level="h4">{data.title}</Typography>
            <Typography level="h5">{data.item1}</Typography>
            <Typography level="h5">{data.item2}</Typography>
            <Typography level="h5">{data.item3}</Typography>
            <Typography level="h5">{data.item4}</Typography>
            <Typography level="h5">{data.item5}</Typography>
          </Box>
        ))}
      </Box>
  )
}

export default BrandInfo