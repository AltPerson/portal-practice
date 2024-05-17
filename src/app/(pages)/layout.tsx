import Navbar from '@/components/Navbar';
import { Box, Container } from '@mui/material';
import PageHeader from './_components/PageHeader';

export default function PagesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Box>
      <Navbar />
      <Container sx={{ paddingTop: '50px' }} disableGutters>
        <PageHeader />
        {children}
      </Container>
    </Box>
  );
}
