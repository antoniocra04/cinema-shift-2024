import {axiosClient} from './client'

export const createOtpCode = async (phone: string) => {
    return axiosClient.post(`/auth/otp`, {phone})
}

export const signIn = async (phone: string, code: number) => {
    return axiosClient.post(`/users/signin`, {phone, code})
}