// import { HomeReducerActionProps } from "../../interface/redux.type"
// type Props = HomeReducerActionProps;

export const HomeActionIncrement = (currentValue?: number)=> async (dispatch?: any) =>{
    console.log('CLICKED');
    
    // dispatch({type:"SET_INCREMENT", value: currentValue + 1 })
} 
export const HomeActionDecrement = (currentValue: number)=> async (dispatch: any) =>{
    dispatch({type:"SET_DECREMENT", value: currentValue - 1 })
} 