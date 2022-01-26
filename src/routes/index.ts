import { IRoute } from "../models/IRoute";
import AirPodsPage from "../pages/AirPodsPage";
import CartPage from "../pages/CartPage";
import HomePage from "../pages/HomePage";
import IphonePage from "../pages/IphonePage";
import MacPage from "../pages/MacPage";
import ProductPage from "../pages/ProductPage";

export enum RoutesName {
  HOME = "/",
  PRODUCT_ID = "/app/:id",
  CART = "/cart",
  MACBOOK = "/mac",
  IPHONE = "/phone",
  AIRPODS = "/pods",
}

export const privateRoute: IRoute[] = [
  { path: RoutesName.HOME, component: HomePage, exact: true },
  { path: RoutesName.PRODUCT_ID, component: ProductPage },
  { path: RoutesName.CART, component: CartPage },
  { path: RoutesName.MACBOOK, component: MacPage },
  { path: RoutesName.IPHONE, component: IphonePage },
  { path: RoutesName.AIRPODS, component: AirPodsPage },
];
