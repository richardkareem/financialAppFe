export type UserResponse = {
    status: number;
    message: UserProp;
}

export type UserProp = {
    "id": number,
    "name": string,
    "email": string,
    "charge": number,
    "payFirst": number
}