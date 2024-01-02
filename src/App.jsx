import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsMobile } from "./redux/Slices/UiSlice";
import { ToastContainer, Zoom } from "react-toastify";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SignupPage from "./pages/Auth/SignUpPage/SignUp";
import LoginPage from "./pages/Auth/LoginPage/Login";
import HomePage from "./pages/homePage/Home";
import CartPage from "./pages/CartPage/Cart";
import CheckoutPage from "./pages/CheckoutPage/Checkout";
import SuccessPage from "./pages/OrderSuccesPage/Success";

import { Footer, ProductDetails } from "./Components/index";

import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const dispatch = useDispatch();
  const { isMobile } = useSelector((state) => state.ui);

  useEffect(() => {
    const handleResize = () => {
      dispatch(setIsMobile(window.innerWidth <= 520));
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [dispatch]);
  return (
    <Router>
      <ToastContainer
        transition={Zoom}
        position="top-center"
        autoClose={3000}
      />
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/:productId" element={<ProductDetails />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/order-success" element={<SuccessPage />} />
      </Routes>
      {!isMobile && <Footer />}
    </Router>
  );
};

export default App;
