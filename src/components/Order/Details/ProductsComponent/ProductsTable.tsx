import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, styled, Box } from '@mui/material';
import { productsData } from '../../../../data/productsData';

const ProductsTable: React.FC = () => {

  return (
    <>
      <TableContainer sx={{ maxHeight: '168px', overflowY: 'auto' }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TCell>NAME</TCell>
              <TCell>COUNT</TCell>
              <TCell>PRICE</TCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {productsData.map((product, index) => (
              <TableRow
                key={index}
                sx={{
                  backgroundColor: index % 2 === 0 ? '#EDF2F7' : 'inherit'
                }}
              >
                <TCellBody>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minWidth: '36px', minHeight: '34px' }}>
                      <Img src={product.urlImg} alt='product-img' />
                    </Box>
                    <Box>
                      {product.name}
                    </Box>
                  </Box>
                </TCellBody>
                <TCellBody>{product.count}</TCellBody>
                <TCellBody>{product.price}</TCellBody>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ProductsTable;

const TCell = styled(TableCell)(({ theme }) => ({
  padding: 0,
  paddingLeft: 24,
  minWidth: '176.67px',
  height: 40,
  whiteSpace: 'nowrap',
  fontSize: 12,
  fontWeight: 700,
  lineHeight: '16px',
  letterSpacing: '0.05em',
  textAlign: 'left',
  color: '#4A5568',
  border: 'none',

  [theme.breakpoints.down('xl')]: {
    paddingLeft: 20,
    minWidth: '150px',
    height: 32,
  }
}))

const TCellBody = styled(TableCell)(({ theme }) => ({
  padding: '14px 0px 14px 24px',
  minWidth: '176.67px',
  fontSize: 14,
  fontWeight: 400,
  lineHeight: '20px',
  textAlign: 'left',
  color: '#4A5568',
  border: 'none',

  [theme.breakpoints.down('xl')]: {
    fontSize: 12,
    padding: '10px 0px 10px 24px',
    minWidth: '150px',
    height: 32,
  }
}))

const Img = styled('img')(({ theme }) => ({
  width: '36px',
  height: '34px',
  objectFit: 'cover',

  [theme.breakpoints.down('xl')]: {
    width: '28px',
    height: 'auto',
  }
}))
