import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Quotes',
};

export default function QuotesPage() {
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
