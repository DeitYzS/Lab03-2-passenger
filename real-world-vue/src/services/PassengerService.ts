import axios from 'axios'
import type { AxiosInstance, AxiosResponse } from 'axios'
import type { PassengerItem } from '@/type'

const apiClientStudent: AxiosInstance = axios.create({
  baseURL: 'https://my-json-server.typicode.com/se331-2022/passengerdb',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})


export default {
    getEvent(): Promise<AxiosResponse<PassengerItem[]>>{
      return apiClientStudent.get<PassengerItem>('/passenger')
    }
}