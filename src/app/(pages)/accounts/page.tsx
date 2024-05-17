import { Metadata } from 'next';
import Accounts from './_compontents/client/Accounts';
export const metadata: Metadata = {
  title: 'Accounts',
};

export default async function AccountsPage() {
  return <Accounts/>
}
