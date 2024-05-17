import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { Metadata } from 'next';
import { fetchAllAccounts } from './actions';
export const metadata: Metadata = {
  title: 'Accounts',
};

export default function AccountsPage() {
	fetchAllAccounts();
	
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Value</TableCell>
            <TableCell align="right">Object</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow></TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
