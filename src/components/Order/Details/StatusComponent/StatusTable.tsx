import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, styled, Box } from '@mui/material';
import { Status } from '../../../../data/tableData';
import Badge from '../../List/TableComponent/Badge';
import { statusData } from '../../../../data/statusData';

const statusStyles: Record<Status, { backgroundColor: string; color: string }> = {
  PENDING: { backgroundColor: 'transparent', color: '#1A202C' },
  TRANSPORTING: { backgroundColor: '#BEE3F8', color: '#2A4365' },
  PACKAGING: { backgroundColor: '#FEEBCB', color: '#744210' },
  DELIVERED: { backgroundColor: '#C6F6D5', color: '#22543D' },
  CANCELLED: { backgroundColor: '#FED7D7', color: '#822727' }
};

const StatusTable: React.FC = () => {

  return (
    <>
      <TableContainer sx={{ maxHeight: '168px', overflowY: 'auto' }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TCell>FECHA</TCell>
              <TCell>Status</TCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {statusData.map((data, index) => (
              <TableRow
                key={index}
                sx={{
                  backgroundColor: index % 2 === 0 ? '#EDF2F7' : 'inherit'
                }}
              >
                <TCellBody sx={{ paddingLeft: '50px' }}>{data.date}</TCellBody>
                <TCellBody>
                  <Box>
                    <Badge
                      name={data.status}
                      color={statusStyles[data.status].color}
                      background={statusStyles[data.status].backgroundColor}
                    />
                  </Box>
                </TCellBody>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer >
    </>
  );
};

export default StatusTable;

const TCell = styled(TableCell)(({ theme }) => ({
  padding: 0,
  paddingLeft: "24px",
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
    paddingLeft: "20px",
    minWidth: '150px',
    height: 32,
  }
}))

const TCellBody = styled(TableCell)(({ theme }) => ({
  padding: 0,
  height: '52px',
  minWidth: '176.67px',
  fontSize: 14,
  fontWeight: 400,
  lineHeight: '20px',
  textAlign: 'left',
  color: '#718096',
  border: 'none',

  [theme.breakpoints.down('xl')]: {
    fontSize: 12,
    minWidth: '150px',
    height: 46,
  }
}))
