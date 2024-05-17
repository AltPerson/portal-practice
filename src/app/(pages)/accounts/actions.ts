'use server';
import { accounts } from "@/mock";

export const fetchAllAccounts = async()=>{
	try{
		return new Promise((resolve, reject) =>{
			// throw new Error('Error fetch');
			setTimeout(() =>resolve(accounts),1000)
		})
	}catch(error){
		return error;
	}
}