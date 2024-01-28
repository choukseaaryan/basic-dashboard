import React, { useState } from "react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { HANDLE_LOGIN } from "../../Redux/actions/admin";
import PageLoader from "../../Components/PageLoader";

const Login = () => {
	const [data, setData] = useState({
		email: "",
		password: "",
	});
	const [loading, setLoading] = useState(false);

	const [showPassword, setShowPassword] = useState(false);

	const dispatch = useDispatch();

	const submitHandler = (e) => {
		if (!data.email || !data.password) {
			toast.error("Please fill all fields!");
			return;
		}

		const emailRegex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
		if (!emailRegex.test(data.email)) {
			toast.error("Please enter valid email!");
			return;
		}

		setLoading(true);
		dispatch(HANDLE_LOGIN({ payload: data })).then((res) => {
			if (res?.success) {
				window.location.href = "/";
				setLoading(false);
			}
		});
	};

	const changeHandler = (e) => {
		setData((prevData) => ({
			...prevData,
			[e.target.name]: e.target.value,
		}));
	};

	const toggleShowPassword = () => {
		setShowPassword(!showPassword);
	};

	return (
		<>
			{loading ? (
				<PageLoader />
			) : (
				<div className="login">
					<div className="login__container">
						<h1>Login</h1>
						<div className="login__form">
							<h4>E-mail</h4>
							<input
								name="email"
								type="email"
								placeholder="Enter E-mail"
								onChange={changeHandler}
							/>

							<h4>Password</h4>
							<div className="password__container">
								<input
									name="password"
									type={showPassword ? "text" : "password"}
									placeholder="Enter Password"
									onChange={changeHandler}
									className="password__input"
								/>
								<button
									className="toggle__passwordBtn"
									onClick={toggleShowPassword}
								>
									{showPassword ? (
										<i class="bx bx-hide"></i>
									) : (
										<i class="bx bx-show"></i>
									)}
								</button>
							</div>

							<button
								onClick={submitHandler}
								className="login__signInButton"
							>
								Login
							</button>
						</div>

						<p className="login__registerPara">
							Don't have an account?{" "}
							<a href="/signup" className="login__registerButton">
								Sign Up
							</a>
						</p>
					</div>
				</div>
			)}
		</>
	);
};

export default Login;
