import { EStatus } from "../../types";

export interface IQuote{
	locator: string,
	quoteState: string,
	productName: string,
	accountLocator: string,
}

export interface IQuotes{
	data:IQuote[],
	status: EStatus
}