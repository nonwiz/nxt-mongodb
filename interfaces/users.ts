/**
 * Object : Interface for UI
 * ObjectModel : Full Properties of Object within Mongodb
 */

export interface User {
    email: string;
    firstName: string;
    lastName: string;
}

export interface UserModel {
    email: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    password: string;
}

export const userPaths = ["email", "firstName", "lastName", "phoneNumber"];
