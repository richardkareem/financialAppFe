import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type UserDetailProps  = {
    name: string;
    token: string;
    point: number;
}

const initialState: UserDetailProps = {
    name:'richard',
    point: 2609,
    token: 'qreqweyu-09812sadfgp0'
}

export const userDetailSlice = createSlice({
    name:'userDetail',
    initialState,
    reducers:{
        changeNames: (state, action: PayloadAction<string>) =>{
            state.name = action.payload
            // changeNameAction(state)
        },
        changePoint: (state, action: PayloadAction<number>)=>{
            state.point = action.payload
        },
    }
})

const userDetailReducer = userDetailSlice.reducer;
export const { changeNames, changePoint } = userDetailSlice.actions; 
export default userDetailReducer;