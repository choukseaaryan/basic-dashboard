import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
	const isAuth = localStorage.getItem("accessToken") !== null ? true : false;

	return !isAuth ? (
		<div className="relative">
			<Outlet />
		</div>
	) : (
		<Navigate to="/login" />
	);
};

export default ProtectedRoute;
