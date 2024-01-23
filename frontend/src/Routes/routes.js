import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import ErrorPage404 from "../Components/ErrorPage404";
import PageLoader from "../Components/PageLoader";

const Dashboard = lazy(() => import("../Pages/Dashboard"));
const Details = lazy(() => import("../Pages/Details"));
const Main = lazy(() => import("./main"));
const Login = lazy(() => import("../Pages/Login"));
const Signup = lazy(() => import("../Pages/Signup"));

const AllRoutes = () => (
	<Suspense fallback={<PageLoader />}>
		<Routes>
			<Route path="*" element={<ErrorPage404 />} />
			<Route path="/login" element={<Login />} />
			<Route path="/signup" element={<Signup />} />
      <Route path="/" element={<Main />}>
				<Route path="/" element={<Dashboard />} />
				<Route path="/details/:userId" element={<Details />} />
			</Route>
		</Routes>
	</Suspense>
);

export default AllRoutes;
