import {Routes, Route} from "react-router-dom"
import { Login } from "./Login"
import { HomePage } from "./HomePage"
import Admin from "./Admin"
import PrivateRoutes from "../components/PrivateRoutes"
import EditProduct from "./EditProduct"

export const MainRoutes = () => {
  return <Routes>
     <Route path="/" element={<HomePage />} /> 
    <Route path="/admin" element={
      <PrivateRoutes>
        <Admin />
      </PrivateRoutes>} /> 
    <Route path="/login" element={<Login />} />
    <Route path="/edit/:id"
      element={<PrivateRoutes>
        <EditProduct />
      </PrivateRoutes>} />
  {/* <Route path="*" element={<h3>Page Not Found</h3>} /> */}
  </Routes>
}