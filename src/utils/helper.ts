import axios from "axios";
import moment from "moment";
import API from "./api";


export type GetSizeType = 'S' | 'M' | 'L' | 'XL' | 'XXL'

export const getSize = (size: GetSizeType): number => {
    switch (size) {
        case 'S':
            return 8
        case 'M':
            return 16;
        case "L":
            return 32;
        case "XL":
            return 64;
        case "XXL":
            return 128;
        default:
            return 16
    }
}

export const rupiah = (value: number) => {
    return new Intl.NumberFormat('id-ID', {
        minimumFractionDigits: 0,
    }).format(value);
}

export const statusDay = () : string =>  {
    const date = new Date();
    let greeting = ''
    const h: number = parseInt(moment(date).format('HH'));
    // console.log({h});
    
    if (h > 5) {
        greeting = "Selamat Pagi"
    }
    if (h > 9) {
        greeting = "Selamat Siang"
    }
    if (h > 15) {
        greeting = 'Selamat Sore'
    }
    if (h >= 18) greeting = "Selamat Malam"

    return greeting;
}

export const fetch = async(url:string)=>{
    try {
        const response = await axios.get(`${API.root}${url}`)
        return  await response.data
    } catch (error) {
        return error
    }
}