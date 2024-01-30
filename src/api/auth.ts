import axios from 'axios'
import {BACKEND_URL} from './constants'

export const createOtpCode = async (phone: string) => {
    return axios.post(`${BACKEND_URL}auth/otp`, {phone})
}

export const signIn = async (phone: string, code: number) => {
    return axios.post(`${BACKEND_URL}users/signin`, {phone, code})
}