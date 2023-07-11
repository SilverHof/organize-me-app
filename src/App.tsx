import { Route, Routes } from "react-router-dom";
import { Layout } from "./layout/Layout";
import { publicRoutesArray } from "./routes/publicRoutesArray";
import { privateRoutesArray } from "./routes/privateRoutesArray";
import { PrivateRoute } from "./routes/PrivateRoute";

const App = () => {
   
   return (
      <Routes>
         {/* Public Routes */}
         {publicRoutesArray.map(({ path, Component }) => (
            <Route
               key={path}
               path={path}
               element={<Component />}
            />
         ))}

         {/* Private Routes */}
         <Route element={<PrivateRoute />}>
            <Route element={<Layout />}>
               {privateRoutesArray.map(({ path, Component }) => (
                  <Route
                     key={path}
                     path={path}
                     element={<Component />}
                  />
               ))}
            </Route>
         </Route>
      </Routes>
   );
};

export default App;
