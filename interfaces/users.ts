/**
 * Object : Interface for UI
 * ObjectModel : Full Properties of Object within Mongodb
 */

export interface User {
    email: string;
    firstName: string;
    lastName: string;
    role: string;
}

export interface UserModel {
    email: string;
    firstName: string;
    lastName: string;
    password: string;
    role: string;
}

export const userPaths = ["email", "firstName", "lastName", "role"];
