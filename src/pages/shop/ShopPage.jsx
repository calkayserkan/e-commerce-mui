import { Box } from "@mui/joy"
import Categories from "../../components/categories/Categories"
import Products from "../../components/products/Products"
import CampaignSingle from "../../components/campaignSingle/CampaignSingle"

function ShopPage() {
  return (
    <Box>
        <Categories/>
        <Products/>
        <CampaignSingle/>
        <Products/>
    </Box>
  )
}

export default ShopPage