import { Box, Typography } from '@mui/material';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home',
};

export default function HomePage() {
  return (
    <Box>
      <Typography variant="body1">Is website was created for testing Next.js features.</Typography>
    </Box>
  );
}
