import { IAccount, IAccounts } from '@/lib/store/features/accounts/types';
import { IQuote, IQuotes } from '@/lib/store/features/quotes/types';
import { EStatus } from '@/lib/store/types';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import Loader from '../Loader';
import Link from 'next/link';

interface TableComponentProps {
  data: IAccounts | IQuotes;
  isAccountTable?: boolean;
}
const isIAccount = (data: IAccount[] | IQuote[]): data is IAccount[] => {
  return (data[0] as IAccount).state !== undefined;
};

const TableComponent = ({ data }: TableComponentProps) => {
  const { data: tableData, status } = data;

  if (status === EStatus.LOADING) return <Loader />;

  if (status === EStatus.ERROR) return <Typography>Fetch Error</Typography>;

	if(tableData.length === 0) return <Typography>No data</Typography>;;

  if (isIAccount(tableData)) {
    return (
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Locator</TableCell>
              <TableCell align="right">Type</TableCell>
              <TableCell align="right">State</TableCell>
              <TableCell align="right">First Name</TableCell>
              <TableCell align="right">Last Name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((item:IAccount) => (
              <TableRow key={item.locator}>
                <TableCell><Link href={`/accounts/${item.locator}`}>{item.locator}</Link></TableCell>
                <TableCell align="right">{item.type}</TableCell>
                <TableCell align="right">{item.state}</TableCell>
                <TableCell align="right">{item.data.firstName}</TableCell>
                <TableCell align="right">{item.data.lastName}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  } else {
    return (
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Locator</TableCell>
              <TableCell align="right">Quote State</TableCell>
              <TableCell align="right">Product Name</TableCell>
              <TableCell align="right">Account Locator</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((item) => (
              <TableRow key={item.locator}>
                <TableCell>{item.locator}</TableCell>
                <TableCell align="right">{item.quoteState}</TableCell>
                <TableCell align="right">{item.productName}</TableCell>
                <TableCell align="right">{item.accountLocator}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
};

export default TableComponent;
