import { Navigate, Outlet } from "react-router-dom";
import AppFooter from "../Components/AppFooter";

const useAuth = () => {
	const user = {
		loggedIn: localStorage.getItem("accessToken") !== null ? true : false,
	};

	return user && user.loggedIn;
};


const ProtectedRoute = () => {
	const isAuth = useAuth();

	return isAuth ? (
		<div className="relative">
			<Outlet />
			<AppFooter />
		</div>
	) : (
		<Navigate to="/login" />
	);
};

export default ProtectedRoute;
