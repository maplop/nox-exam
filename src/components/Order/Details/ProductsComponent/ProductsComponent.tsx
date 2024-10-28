import { Box } from "@mui/material"
import ProductsTable from "./ProductsTable"
import SectionTitle from "../../../common/SectionTitle"

const ProductsComponent = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', }}>
        <SectionTitle
          title="Products"
          subtitle="            Order Products"
        />
      </Box>
      <Box sx={{ padding: '12px' }}>
        <ProductsTable />
      </Box>
    </Box>
  )
}
export default ProductsComponent