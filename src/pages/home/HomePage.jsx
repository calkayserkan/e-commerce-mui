import { Box } from "@mui/joy";
import Blogs from "../../components/blogs/Blogs";
import Brands from "../../components/brands/Brands";
import CampaignSingle from "../../components/campaignSingle/CampaignSingle";
import Campaigns from "../../components/campaigns/Campaigns";
import Categories from "../../components/categories/Categories";
import Footer from "../../components/layout/footer/Footer";
import Products from "../../components/products/Products";
import Slider from "../../components/slider/Slider";

function HomePage() {
  return (
    <Box>
      <Slider />
      <Categories />
      <Products />
      <Campaigns />
      <Blogs />
      <CampaignSingle />
      <Brands />
      <Footer />
    </Box>
  );
}

export default HomePage;
