import type {NextApiRequest, NextApiResponse} from 'next'
import {userPaths} from "@/interfaces";
import {getUsers, loginUser, registerUser} from '@/services/users';
import {pick} from "@/lib/custom";
import {Resp} from '@/services/common';


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    let 
    email: string, 
    password: string, success: boolean, error: boolean, message: string, user: Pick<any, string>,
        data: any;


    switch (req.method) {

        case "GET":
            ({ success, data, message } = await getUsers());
            return Resp(res, 200, "Not authorized", data);

        case "POST":
            const { firstName, lastName, role } = req.body;
            ({ email, password } = req.body);
            const result = await registerUser({ email, firstName, lastName, password, role });
            ({ error, data, success, message } = result);
            return Resp(res, success ? 201 : 500, message, data);

        case "PATCH":
            ({ email, password } = req.body);
            ({ success, error, message, data } = await loginUser(email, password));
            user = pick(data, userPaths);
            return Resp(res, 200, message, {user});

    }
}