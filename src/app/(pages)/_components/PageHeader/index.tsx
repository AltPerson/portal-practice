'use client';
import { mappedNavItemsObject } from '@/lib/constants';
import { Typography } from '@mui/material';
import { usePathname } from 'next/navigation';

const PageHeader = () => {
  const pathname = usePathname();
  const pathnameLabel = mappedNavItemsObject[pathname];
  return (
    <Typography variant="h4" marginBottom="10px">
      {pathnameLabel}
    </Typography>
  );
};

export default PageHeader;
