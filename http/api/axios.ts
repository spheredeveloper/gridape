import axios from "axios";

const WAITLIST_URL = process.env.NEXT_PUBLIC_WAITLIST_BASE_URL;
const getSubscribers = "subscribers";
const $http = axios.create({
baseURL: WAITLIST_URL,
headers : {
 'Content-Type': 'application/json; charset=UTF-8',
}
})

export const joinWaitList = async ( email: string) => {
    try {
        const res = await $http.post('/subscribe', { email })
        return { success: true, data: res?.data, message: 'Waitlist joined successfully' };
    } catch (err : any) {
        return { success: false, message: err.response?.data?.message || 'An error occurred' };  
    }
    }

export const LeaveWaitList = async ( email: string) => {
    try {
        const res = await $http.post('/unsubscribe', { email })
        return { success: true, data: res?.data, message: 'Waitlist joined successfully' };
    } catch (err : any) {
        return { success: false, message: err.response?.data?.message || 'An error occurred' };  
    }
    }

export const getAllSubscribers = async () => {
    try {
        const res = await $http.get(getSubscribers)
        return { success: true, data: res?.data, message: 'Subscribers list successfully fetched!' };
    } catch (err : any) {
        return { success: false, message: err.response?.data?.message || 'An error occurred' };  
    }
    }