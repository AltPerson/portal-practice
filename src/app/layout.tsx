import Providers from '@/providers/Providers';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portal Practice',
  description: 'Created for practicing purposes',
  icons: {
    icon: './icon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
				</Providers>
      </body>
    </html>
  );
}
