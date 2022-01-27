import { IProduct } from "../models/IProduct";
import axios, { AxiosResponse } from "axios";

export default class Store {
  static async getProduct(): Promise<AxiosResponse<IProduct[]>> {
    return axios.get<IProduct[]>(`https://localhost:3001/apple/`);
  }
}
