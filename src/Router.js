import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import ChangePassword from "./pages/ChangePassword";
import Home from "./pages/Home";
import Transactions from "./pages/Transactions";
import About from "./pages/About";
import Header from "./components/Header/Header";
import Records from "./pages/Records";

const Router = () => {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route exact path="/" element={<About />} />
				<Route exact path="/home" element={localStorage.getItem("token") ? <Home /> : <Navigate to="/" />} />
				<Route exact path="/login" element={<Login />} />
				<Route exact path="/register" element={<Register />} />
				<Route exact path="/change-password" element={<ChangePassword />} />
				<Route exact path="/transactions" element={<Transactions />} />
				<Route exact path="/records" element={<Records />} />
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
