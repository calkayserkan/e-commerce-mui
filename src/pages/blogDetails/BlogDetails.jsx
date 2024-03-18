import { Box } from "@mui/joy";
import BlogDetail from "../../components/blogs/blogDetails/BlogDetail";

function BlogDetails() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:"#04364A",
        color:"#DAFFFB"
      }}
    >
      <BlogDetail />
    </Box>
  );
}

export default BlogDetails;
