'use server';
import { quotes } from "@/mock";

export const fetchAllQuotes = async()=>{
	try{
		return new Promise((resolve, reject) =>{
			// throw new Error('Error fetch');
			setTimeout(() =>resolve(quotes),1000)
		})
	}catch(error){
		return error;
	}
}

export const fetchQuotesByAccountLocator = async(account:string)=>{
	try{
		return new Promise((resolve, reject) =>{
			// throw new Error('Error fetch');
			setTimeout(() =>resolve(quotes.filter(quote=>quote.accountLocator === account)),1000)
		})
	}catch(error){
		return error;
	}
}