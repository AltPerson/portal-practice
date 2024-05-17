'use client';
import TableComponent from '@/app/(pages)/_components/Table';
import { fetchQuotesByAccount } from '@/lib/store/features/quotes/slice';
import { useAppDispatch, useAppSelector } from '@/lib/store/hooks';
import { useEffect } from 'react';

interface AccountProps{
	account: string;
}

const Account = ({account}:AccountProps) => {
	const dispatch = useAppDispatch();

	const data = useAppSelector((state) => state.quotes);

	useEffect(()=>{
		const fetchData = async()=>{
			try {
				await dispatch(fetchQuotesByAccount(account));
			} catch (error) {
				console.log(error);
			}
		}

		fetchData();
	},[dispatch,account])

	return (
		<TableComponent data={data} isAccountTable={true}/>
	)
}

export default Account