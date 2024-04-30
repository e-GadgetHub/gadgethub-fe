import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/login";
import Register from "./pages/register";
import Layout from "./layout";
import DetailPage from "./pages/Detail/DetailPage";
import AccountPage from "./pages/Account/AccountPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/detail" element={<DetailPage />} />
          <Route path="/account" element={<AccountPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
