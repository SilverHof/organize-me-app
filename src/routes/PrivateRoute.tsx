import { Navigate, Outlet } from "react-router-dom";
import { ROUTE_PATH } from "../ts/emuns/ROUTE_PATH";

export const PrivateRoute = () => {
   const auth = true;

   return auth ? <Outlet /> : <Navigate to={ROUTE_PATH.LOGIN} />;
};
