import image from "../../assets/blogs/blog5.jpg";
import image2 from "../../assets/blogs/blog3.jpg";
import { Box, Typography } from "@mui/joy";
function CartTable() {
  function createData(image, product, price, quantity, subTotal) {
    return { image, product, price, quantity, subTotal };
  }

  const rows = [
    createData(image, "Frozen yoghurt", 10, 1, 100),
    createData(image2, "Ice cream sandwich", 10, 1, 100),
    // createData(image,'Eclair',10,1,100),
    // createData(image,'Cupcake',10,1,100),
    // createData(image,'Gingerbread',10,1,100),
  ];
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "50vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "start",
        mt: 5,
      }}
    >
      <Box
        sx={{
          width: "100%",
          px: 1,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography level="title-md" sx={{ width: "15%" }}>
          Image
        </Typography>
        <Typography level="title-md" sx={{ width: "30%",textAlign:"center"  }}>
          Product
        </Typography>
        <Typography level="title-md" sx={{ width: "10%" }}>
          Price
        </Typography>
        <Typography level="title-md" sx={{ width: "10%" }}>
          Quantity
        </Typography>
        <Typography level="title-md" sx={{ width: "10%" }}>
          SubTotal
        </Typography>
      </Box>
      {rows.map((item, key) => (
        <Box
          key={key}
          sx={{
            width: "100%",
            px: 1,
            py:1,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            boxShadow:"0px 0px 15px rgba(0,0,0,.2)",
            background:"#64CCC5",
            borderRadius:10,
            alignItems: "center",
            mt:3,
            transition:"all .5s ease-in-out",
            "&:hover":{
              boxShadow:"0px 10px 25px rgba(0,0,0,.5)",
            }
          }}
        >
          <Box
            sx={{
              width: "100px",
              height: "100px",
              backgroundImage: `url(${item.image})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              borderRadius: 7.5,
              boxShadow: "0px 0px 15px rgba(0, 0,0,.5)",
            }}
          ></Box>
          <Typography level="title-sm" sx={{ width: "30%" }}>{item.product}</Typography>
          <Typography level="title-sm" sx={{ width: "10%",textAlign:"center" }}>{item.price}</Typography>
          <Typography level="title-sm" sx={{ width: "10%",textAlign:"center" }}>{item.quantity}</Typography>
          <Typography level="title-sm" sx={{ width: "10%",textAlign:"center" }}>{item.subTotal}</Typography>
        </Box>
      ))}
      
    </Box>
  );
}

export default CartTable;
