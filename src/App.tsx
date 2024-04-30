import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/login";
import Register from "./pages/register";
import Layout from "./layout";
import DetailPage from "./pages/Detail/DetailPage";
import AccountPage from "./pages/Account/AccountPage";
import Cart from "./pages/Cart";
import NotFound from "./pages/notFound";
import Wishlist from "./pages/wishlist";
import Checkout from "./pages/checkout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/detail" element={<DetailPage />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
