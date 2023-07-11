import { ROUTE_PATH } from './../ts/emuns/ROUTE_PATH';
import { LoginPage } from "../pages/LoginPage/LoginPage";
import { NotFoundPage } from "../pages/NotFoundPage/NotFoundPage";
import { SignUpPage } from "../pages/SignUpPage/SignUpPage";
import { RouteType } from "../ts/types/RouteType";

export const publicRoutesArray: RouteType[] = [
   {
      path: ROUTE_PATH.LOGIN,
      Component: LoginPage,
   },
   {
      path: ROUTE_PATH.SIGNUP,
      Component: SignUpPage
   },
   {
      path: ROUTE_PATH.NOT_FOUND,
      Component: NotFoundPage
   }
]