'use client';
import TableComponent from '@/app/(pages)/_components/Table';
import { fetchAccounts } from '@/lib/store/features/accounts/slice';
import { useAppDispatch, useAppSelector } from '@/lib/store/hooks';
import { useEffect } from 'react';

const Accounts = () => {
	const dispatch = useAppDispatch();
	
	const data = useAppSelector((state) => state.accounts);
	
	useEffect(()=>{
		const fetchData = async()=>{
			try {
				await dispatch(fetchAccounts());
			} catch (error) {
				console.log(error);
			}
		}

		fetchData();
	},[dispatch])

	return (
		<TableComponent data={data} isAccountTable={true}/>
	)
}

export default Accounts;