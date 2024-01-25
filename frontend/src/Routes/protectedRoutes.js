import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
	const isAuth = sessionStorage.getItem("profileInfo");
	console.log(isAuth);

	return isAuth ? (
		<div>
			<Outlet />
		</div>
	) : (
		<Navigate to="/login" />
	);
};

export default ProtectedRoute;
