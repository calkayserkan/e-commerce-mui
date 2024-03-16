import Table from "@mui/joy/Table";
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
        mt:5,
      }}
    >
      <Box
        sx={{
          width: "100%",
          px: 5,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography level="title-md" sx={{ width: "15%" }}>
          Image
        </Typography>
        <Typography level="title-md" sx={{ width: "22.5%" }}>
          Product
        </Typography>
        <Typography level="title-md" sx={{ width: "15%" }}>
          Price
        </Typography>
        <Typography level="title-md" sx={{ width: "20%" }}>
          Quantity
        </Typography>
        <Typography level="title-md" sx={{ width: "10%" }}>
          SubTotal
        </Typography>
      </Box>
      <Table hoverRow sx={{ width: "100%", mt: 2.5 }}>
        {rows.map((item, key) => (
          <tbody key={key}>
            <tr>
              <td>
                <Box
                  sx={{
                    width: "100px",
                    height: "100px",
                    backgroundImage: `url(${item.image})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    borderRadius: 5,
                    boxShadow: "0px 0px 15px rgba(0, 0,0,.5)",
                  }}
                ></Box>
              </td>
              <td><Typography level="title-sm">{item.product}</Typography></td>
              <td style={{ textAlign: "center" }}><Typography level="title-sm">{item.price}</Typography></td>
              <td style={{ textAlign: "center" }}><Typography level="title-sm">{item.quantity}</Typography></td>
              <td style={{ textAlign: "center" }}><Typography level="title-sm">{item.subTotal}</Typography></td>
            </tr>
          </tbody>
        ))}
      </Table>
    </Box>
  );
}

export default CartTable;
