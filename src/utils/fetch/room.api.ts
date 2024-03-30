import { fetch } from "../helper"

export const getAllRoom = async()=>{
    return await fetch('user/room')    
}
export const getRoomByIdUser = async(id : string | number)=>{
    try {
        await fetch(`user/room/${id}`)
    } catch (error) {
        return error
    }
}
