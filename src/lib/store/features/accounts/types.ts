import { EStatus } from "../../types";

export interface IAccount{
	locator:string,
	type:string,
	state:string,
	data: {
		middleName?: string;
		lastName: string;
		crm_reference_id?: string;
		firstName: string;
		customerSince?: string;
	},
	delinquencyPlanName?: string;
}

export interface IAccounts{
	data:IAccount[],
	status: EStatus,
}