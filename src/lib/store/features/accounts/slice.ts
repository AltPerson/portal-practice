import { fetchAllAccounts } from "@/app/(pages)/accounts/actions";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { EStatus} from "../../types";
import { IAccount, IAccounts } from "./types";

const initialState:IAccounts ={
	data:[],
	status:EStatus.IDLE,
}

export const fetchAccounts = createAsyncThunk('accounts/fetchAccounts',async(_,{rejectWithValue})=>{
	try {
		const data = await fetchAllAccounts();
		
		return data;
	} catch (error) {
		return rejectWithValue(error);
	}
})

const accountsSlice = createSlice({
	name:"accounts",
	initialState,
	reducers:{},
	extraReducers:(builder)=>{
		builder
		.addCase(fetchAccounts.pending, (state) => {
			state.status = EStatus.LOADING;
		})
		.addCase(fetchAccounts.fulfilled, (state, action) => {
			state.status = EStatus.SUCCESS;
			state.data = action.payload as IAccount[];
		})
		.addCase(fetchAccounts.rejected, (state) => {
			state.status = EStatus.ERROR;
			state.data = [];
		});
	}
})

export default accountsSlice.reducer;