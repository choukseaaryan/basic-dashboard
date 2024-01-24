import React, { useState } from "react";
import { toast } from "react-toastify";

const Login = () => {
	const [data, setData] = useState({
		email: "",
		password: ""
	});

	const submitHandler = (e) => {
		console.log(data);
		
		if(!data.email || !data.password) {
			toast.error("Please fill all fields!");
			return;
		}

		toast.success("Login Successful!");
	};

	const changeHandler = (e) => {
		setData((prevData) => ({
			...prevData,
			[e.target.name]: e.target.value,
		}));
	};

	return (
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
					<input
						name="password"
						type="password"
						placeholder="Enter Password"
						onChange={changeHandler}
					/>

					<button onClick={submitHandler} className="login__signInButton">
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
	);
};

export default Login;
