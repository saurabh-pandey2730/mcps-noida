import { BrowserRouter, Route, Routes } from "react-router-dom";
import Students from "./pages/Students";
// import Customers from "../../Pages/Customers";
// import Dashboard from "../../Pages/Dashbaord";
// import Inventory from "../../Pages/Inventory";
// import Orders from "../../Pages/Orders";

function AppRoutes() {
  return (
    <Routes >
      <Route path="/" element={<h1>helloy</h1>}></Route>
      <Route path="/inventory" element={<h1>hello inventory</h1>}></Route>
      <Route path="/orders" element={<h1>hello orders</h1>}></Route>
      <Route path="/customers" element={<Students/>}></Route>
    </Routes>
  );
}
export default AppRoutes;
