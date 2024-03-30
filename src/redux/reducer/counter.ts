import { createAsyncThunk, createSlice, current, Dispatch, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { SetStateAction } from 'react'
import { UserProp, UserResponse } from '../../interface/user.type'
import axios from 'axios'

// Define a type for the slice 
interface CounterState {
  value: number
  response: UserProp;
}

// Define the initial state using that typse
const initialState: CounterState = {
  value: 0,
  response: {
    charge: 0,
    email: "",
    id: 0,
    name:'',
    payFirst:0
  }
}

export const counterSlice = createSlice({
  name: 'mamamia',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
  },
  extraReducers: (builder)=>{
    // builder.addCase(incrementAsync.pending, ()=>{
    //   console.log('increment pending');
      
    // }).addCase(incrementAsync.fulfilled, (state, action: PayloadAction<number>)=>{
    //   state.value += action.payload;
    // })

    builder.addCase(getAllData.fulfilled, (state, action:PayloadAction<number>)=>{
      state.value = action.payload;
    })
  }
})

export const incrementAsync = createAsyncThunk(
  'counter/incrementAsync',
  async (amount:number)=>{
    await new Promise((resolve)=> setTimeout(resolve, 1000));
    return amount
  }
)

export const getAllData = createAsyncThunk(
  'getAllUser',
  async(setData:SetStateAction<UserProp>) =>{
    try {
      const res = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
      const data: UserResponse = await res.data;
      const message: UserProp = data.message;

      return 200;
    } catch (error) {
      return 500;
    }
  }
)


export const { increment, decrement, incrementByAmount } = counterSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.counter.value

const counterReducer =  counterSlice.reducer
export default counterReducer