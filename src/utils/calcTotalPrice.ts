import { IProduct } from './../models/IProduct';
export const calcTotalPrice = (product: IProduct[]) => product.reduce((acc, item) => acc += item.price, 0)