import { Box } from "@mui/joy"
import BlogImage from "./BlogImage"
import BlogText from "./BlogText"
import BlogReview from "./BlogReview"

function BlogDetail() {
  return (
    <Box sx={{
        width: '90%',
        minHeight:"90vh",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'start',
        alignItems: 'center',
        backgroundColor:"#176B87",
        my:5,
        borderRadius:15,
        boxShadow:"0px 0px 25px black"
    }}>
        <BlogImage/>
        <BlogText/>
        <BlogReview/>
    </Box>
  )
}

export default BlogDetail