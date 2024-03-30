import axios from "axios";
import API from "../../utils/api/index";
import { UserProp, UserResponse } from "../../interface/user.type";
import { Dispatch, SetStateAction } from "react";

export const getAllRoom = (setData: Dispatch<SetStateAction<string>>) => async () => {
  try {
    const res = await axios.get(`${API.root}user/room`);
    const data: UserResponse = await res.data;
    if (data) {
      console.log(data.message);
      
      setData(data.message.name)
    }
  } catch (error) {
    console.log(error);
  }
};


export const jsonPlaceholder  = (setData:Dispatch<SetStateAction<string>>) => async ()=> {
  try {
    const res = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
    const data = await res.data;
    setData(data)
  } catch (error) {
    console.log(error);

  }
}