import { Metadata } from 'next';
import Quotes from './_components/client/Quotes';

export const metadata: Metadata = {
  title: 'Quotes',
};

export default async function QuotesPage() {
  return <Quotes/>
}
