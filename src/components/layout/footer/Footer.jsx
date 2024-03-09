import { Box, Divider} from "@mui/joy";
import Copyright from "./Copyright";
import BrandInfo from "./BrandInfo";
import Subscribe from "./Subscribe";
import Policy from "../policy/Policy";

function Footer() {
  return (
    <Box sx={{ width: "100%", height: "90vh" }}>
      <Policy />
      <Subscribe />
      <BrandInfo />
      <Divider sx={{ background: "rgba(4, 54, 74, .25)" }} />
      <Copyright />
    </Box>
  );
}

export default Footer;
