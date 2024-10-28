import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, styled, Box, IconButton } from '@mui/material';
import { tableData, Status } from '../../../../data/tableData';
import Badge from './Badge';
import Avatar from '../../../common/Avatar';
import { ArrowBack, ArrowForward } from '@mui/icons-material';

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

  const handleChangePage = (newPage: number) => {
    setPage(newPage);
  };

  const paginatedData = tableData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  return (
    <>
      <TableWrapper>
        <Table stickyHeader>
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
                  <AssignBtn
                    disableRipple
                    variant="contained"
                    color="primary"
                    size="small"
                  >
                    Assign
                  </AssignBtn>
                </TCellBody>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableWrapper>

      <PaginationWrapper>
        <BtnPagination
          onClick={() => handleChangePage(page - 1)}
          isDisable={page === 0}
        >
          <ArrowBack />
          <span>Preview</span>
        </BtnPagination>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
          {Array.from({ length: 3 }).map((_, index) => (
            <PageMarker key={index} currentPage={index === 0}>
              {index + 1}
            </PageMarker>
          ))}
        </Box>
        <BtnPagination
          onClick={() => handleChangePage(page + 1)}
          isDisable={false}
        >
          <span>Next</span>
          <ArrowForward />
        </BtnPagination>
      </PaginationWrapper >
    </>
  );
};

export default TableComponent;

const TableWrapper = styled(TableContainer)(({ theme }) => ({
  padding: '12px',
  maxWidth: 'calc(100vw - 858px)',
  overflowX: 'auto',

  [theme.breakpoints.down('xl')]: {
    padding: '0px',
    maxWidth: 'calc(100vw - 713.5px)',
  }
}))

const TCell = styled(TableCell)(({ theme }) => ({
  padding: 0,
  paddingLeft: 24,
  minWidth: '176.67px',
  whiteSpace: 'nowrap',
  width: 'auto',
  height: 40,
  fontSize: '12px',
  fontWeight: 700,
  lineHeight: '16px',
  letterSpacing: '0.05em',
  textAlign: 'left',
  color: '#4A5568',
  border: 'none',

  [theme.breakpoints.down('xl')]: {
    height: 36,
  }
}))

const TCellBody = styled(TableCell)(({ theme }) => ({
  padding: '14px 0px 14px 24px',
  minWidth: '176.67px',
  fontSize: '14px',
  fontWeight: 400,
  lineHeight: '20px',
  textAlign: 'left',
  color: '#718096',
  border: 'none',

  [theme.breakpoints.down('xl')]: {
    height: 36,
    fontSize: '13px',
  }
}))

const AssignBtn = styled(Button)(({ theme }) => ({
  height: 24,
  padding: '0px 8px',
  textTransform: 'none',
  borderRadius: '16px',
  boxShadow: 'none',
  color: "#FFF",
  fontSize: '12px',
  fontWeight: 600,
  lineHeight: '16px',

  [theme.breakpoints.down('xl')]: {
    height: 22,
    fontSize: '11px',
  }
}))

const PaginationWrapper = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px 12px',
  marginTop: '32px'
}))

const PageMarker = styled(Button)<{ currentPage: boolean }>(({ theme, currentPage }) => ({
  backgroundColor: currentPage ? '#FF7500' : '#FFF',
  color: currentPage ? '#fff' : '#FF7500',
  borderRadius: '6px',
  width: 35,
  height: 32,
  minWidth: 0,
  padding: 0,
  fontSize: '14px',
  fontWeight: 600,
  lineHeight: '20px',

  [theme.breakpoints.down('xl')]: {
    width: 28,
    height: 26,
    fontSize: '13px',
  }
}))

const BtnPagination = styled(IconButton)<{ isDisable: boolean }>(({ theme, isDisable }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  padding: '16px',
  fontSize: '16px',
  fontWeight: 600,
  lineHeight: '24px',

  ':hover': {
    background: 'none'
  },

  span: {
    color: isDisable ? 'rgba(255, 117, 0, 0.5)' : '#FF7500'
  },

  svg: {
    color: isDisable ? 'rgba(255, 117, 0, 0.5)' : '#FF7500'
  },

  [theme.breakpoints.down('xl')]: {
    fontSize: '14px',
    padding: '0px',

    svg: {
      fontSize: '18px',
    },
  }
}))
