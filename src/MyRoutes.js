import { Route, Routes } from "react-router-dom";
// import Home from "./Pages/Home";
// import LoginPage from "./Pages/LoginPage";
import RegistrationPage from "./Pages/RegistrationPage";
export default function MyRoutes() {
  return (
    <Routes>
      <Route path="/" element={<RegistrationPage />} />
    </Routes>
  );
}