'use server';
import { env } from "process";


const URL = `${env.API_URL}policy/${env.tenantLocator}/accounts/list`;
const TOKEN = `Bearer ${env.TOKEN}`;

export const fetchAllAccounts = async()=>{
	try{
		const response = await fetch(URL,{
			method: 'GET',
      headers: {
        'Authorization': TOKEN,
        'Content-Type': 'application/json',
      },
		});
	
		if (!response.ok) {
      console.log('Response Status:', response.status);
      console.log('Response Headers:', response.headers);
      throw new Error('Network response was not ok');
    }

		const data = await response.json();
		console.log(data);
	}catch(error){
		console.log('Error',error);
	}
}