import { fetchAllQuotes, fetchQuotesByAccountLocator } from "@/app/(pages)/quotes/actions";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { EStatus } from "../../types";
import { IQuote, IQuotes } from "./types";

const initialState:IQuotes = {
	data:[],
	status:EStatus.IDLE,
}

export const fetchQuotes = createAsyncThunk('quotes/fetchQuotes',async(_,{rejectWithValue})=>{
	try {
		const data = await fetchAllQuotes();

		return data;
	} catch (error) {
		return rejectWithValue(error);
	}
})

export const fetchQuotesByAccount = createAsyncThunk('quotes/fetchQuotesByAccount',async(account:string,{
	rejectWithValue
})=>{
	try {
		const data = await fetchQuotesByAccountLocator(account);
		
		return data;
	} catch (error) {
		return rejectWithValue(error);
	}
})

const quotesSlice = createSlice({
	name:'quotes',
	initialState,
	reducers:{},
	extraReducers:(builder)=>{
		builder
		.addCase(fetchQuotes.pending, (state) => {
			state.status = EStatus.LOADING;
		})
		.addCase(fetchQuotes.fulfilled, (state, action) => {
			state.status = EStatus.SUCCESS;
			state.data = action.payload as IQuote[];
		})
		.addCase(fetchQuotes.rejected, (state) => {
			state.status = EStatus.ERROR;
			state.data = [];
		})
		.addCase(fetchQuotesByAccount.pending, (state) => {
			state.status = EStatus.LOADING;
		})
		.addCase(fetchQuotesByAccount.fulfilled, (state, action) => {
			state.status = EStatus.SUCCESS;
			state.data = action.payload as IQuote[];
		})
		.addCase(fetchQuotesByAccount.rejected, (state) => {
			state.status = EStatus.ERROR;
			state.data = [];
		});
	}
})

export default quotesSlice.reducer;