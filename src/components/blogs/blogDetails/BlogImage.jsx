import { Box } from "@mui/joy";

import image from "../../../assets/blogs/blog3.jpg"

function BlogImage() {
  return (
    <Box
      sx={{
        width: "98%",
        height:"75vh",
        backgroundImage: `url(${image})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        borderRadius: 10,
        boxShadow: "0px 0px 15px rgba(0, 0,0,.5)",
        mt:2
      }}
    ></Box>
  );
}

export default BlogImage;
