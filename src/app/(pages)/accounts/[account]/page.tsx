import React from 'react'
import Account from './_components/client/Account'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Account',
};

export default async function AccountPage({params}:{params:{account:string}}) {
	return <Account account={params.account}/>
}
