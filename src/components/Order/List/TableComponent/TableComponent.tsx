import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, TablePagination, styled, Box } from '@mui/material';
import { tableData, Status } from '../../../../data/tableData';
import Badge from './Badge';
import Avatar from '../../../common/Avatar';

const statusStyles: Record<Status, { backgroundColor: string; color: string }> = {
  PENDING: { backgroundColor: 'transparent', color: '#1A202C' },
  TRANSPORTING: { backgroundColor: '#BEE3F8', color: '#2A4365' },
  PACKAGING: { backgroundColor: '#FEEBCB', color: '#744210' },
  DELIVERED: { backgroundColor: '#C6F6D5', color: '#22543D' },
  CANCELLED: { backgroundColor: '#FED7D7', color: '#822727' }
};

const TableComponent: React.FC = () => {
  const [page, setPage] = useState(0);
  const rowsPerPage = 5;

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const paginatedData = tableData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  return (
    <>
      <TableContainer sx={{ width: '100%', overflowX: 'auto' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TCell>ORDER ID</TCell>
              <TCell>NAME</TCell>
              <TCell>PRODUCTS</TCell>
              <TCell>EMAIL/PHONE</TCell>
              <TCell>Status</TCell>
              <TCell></TCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedData.map((row, index) => (
              <TableRow
                key={row.orderId}
                sx={{
                  backgroundColor: index % 2 === 0 ? '#EDF2F7' : 'inherit'
                }}
              >
                <TCellBody>{row.orderId}</TCellBody>
                <TCellBody>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Avatar img={row.avatar} size={24} />
                    {row.name}
                  </Box>
                </TCellBody>
                <TCellBody>{row.products}</TCellBody>
                <TCellBody>
                  {row.email && <div>{row.email}</div>}
                  {row.phone && <div>{row.phone}</div>}
                </TCellBody>
                <TCellBody>
                  <Box>
                    <Badge
                      name={row.status}
                      color={statusStyles[row.status].color}
                      background={statusStyles[row.status].backgroundColor}
                    />
                  </Box>
                </TCellBody>
                <TCellBody>
                  <Button
                    disableRipple
                    variant="contained"
                    color="primary"
                    size="small"
                    sx={{
                      height: 24,
                      padding: '0px 8px',
                      textTransform: 'none',
                      borderRadius: '16px',
                      boxShadow: 'none',
                      color: "#FFF",
                      fontSize: '12px',
                      fontWeight: 600,
                      lineHeight: '16px',
                    }}
                  >
                    Assign
                  </Button>
                </TCellBody>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        component="div"
        count={tableData.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[]}
      />
    </>
  );
};

export default TableComponent;

const TCell = styled(TableCell)(() => ({
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
  border: 'none'
}))

const TCellBody = styled(TableCell)(() => ({
  padding: '14px 0px 14px 24px',
  minWidth: '176.67px',
  fontSize: 14,
  fontWeight: 400,
  lineHeight: '20px',
  textAlign: 'left',
  color: '#718096',
  border: 'none'
}))
