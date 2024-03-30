import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'
import axios from 'axios'
import API from '../../utils/api'
import { Alert } from 'react-native'


// Define a type for the slice state
interface UserState {
  value: number
}

// Define the initial state using that typse
const initialState: UserState = {
  value: 0,
}

export const userSlice = createSlice({
  name: 'user',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    postUser: () => {
        const postData = (data)=>{
            axios.post(`${API.root}user`, data, {
                headers:{
                    "Content-Type":'application/json'
                }
            }).then(res =>{
                if(res){
                    Alert.alert("berhasil Login")
    
                }
            }).catch(err =>{
                console.log(err);
            })
        }
        

   
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
  },
})

export const { postUser } = userSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.counter.value

const userReducer =  userSlice.reducer
export default userReducer