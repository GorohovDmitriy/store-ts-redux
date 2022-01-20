import { IApple } from './../models/IApple';
import axios, { AxiosResponse } from 'axios'

export default class AppleService {
	static async getProduct(): Promise<AxiosResponse<IApple[]>> {
		return axios.get<IApple[]>(`${process.env.API_URL}`)
	}
}