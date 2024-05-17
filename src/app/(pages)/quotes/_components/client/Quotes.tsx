'use client';
import TableComponent from '@/app/(pages)/_components/Table';
import { fetchQuotes } from '@/lib/store/features/quotes/slice';
import { useAppDispatch, useAppSelector } from '@/lib/store/hooks';
import { useEffect } from 'react';

const Quotes = () => {
	const dispatch = useAppDispatch();
	
	const data = useAppSelector((state) => state.quotes);
	
	useEffect(()=>{
		const fetchData = async()=>{
			try {
				await dispatch(fetchQuotes());
			} catch (error) {
				console.log(error);
			}
		}

		fetchData();
	},[dispatch])

	return (
		<TableComponent data={data}/>
	)
}

export default Quotes;