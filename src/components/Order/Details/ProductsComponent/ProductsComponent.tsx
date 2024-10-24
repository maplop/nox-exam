import { Box, Typography } from "@mui/material"
import ProductsTable from "./ProductsTable"

const ProductsComponent = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', }}>
        <Box>
          <Typography sx={{
            fontSize: '20px',
            fontWeight: 600,
            lineHeight: '30px',
            textAlign: 'left',
            color: '#05004E'
          }}>
            Products
          </Typography>
          <Typography sx={{
            fontSize: '16px',
            fontWeight: 400,
            lineHeight: '24px',
            textAlign: 'left',
            color: '#737791'
          }}>
            Order Products
          </Typography>
        </Box>

      </Box>
      <Box sx={{ padding: '12px' }}>
        <ProductsTable />
      </Box>
    </Box>
  )
}
export default ProductsComponent