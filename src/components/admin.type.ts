export type IAdmin = {
    _id : number;
    firstName : string;
    lastName : string;
    phoneNumber : number;
    age : number;
}

export type UserResponse = {
    data : IAdmin[];
};


export enum PageEnum {
    list,
    add,
    edit,
}