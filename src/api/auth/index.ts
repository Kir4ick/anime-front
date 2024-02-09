import { authClient } from "./auth-client";

// @ts-ignore
import { AUTH_ROUTES } from "./routes";

import {SuccessAuthResponseType} from "../../types/responses/auth/success-auth-response.type";
import {AuthRequestType} from "../../types/requests/auth/auth-request.type";
import {RegisterRequestType} from "../../types/requests/auth/register-request.type";

export const register = async (body: RegisterRequestType): Promise<object> => {
    const { data } = await authClient.post<SuccessAuthResponseType>(AUTH_ROUTES.register, body);

    return data;
};

export const auth = async (body: AuthRequestType): Promise<object> => {
    authClient.interceptors.request.use((config) => {
        config.headers.Authorization = btoa(body.email + body.password)

        return config;
    })

    const { data } = await authClient.post<SuccessAuthResponseType>(AUTH_ROUTES.auth);

    return data;
};

export const refreshToken = async (): Promise<object> => {
    const { data } = await authClient.post<SuccessAuthResponseType>(AUTH_ROUTES.refreshToken);

    return data;
};
