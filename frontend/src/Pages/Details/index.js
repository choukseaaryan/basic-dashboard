import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PageLoader from "../../Components/PageLoader";
import ErrorPage404 from "../../Components/ErrorPage404";
import "./details.css";

const Details = () => {
	const { userId } = useParams();
	const [user, setUser] = useState({});
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	useEffect(() => {
		const fetchUser = async () => {
			try {
				// const response = await axios.get(`https://reqres.in/api/users/${userId}`);
				const data = {
					id: 1,
					name: "User 1",
					email: "user@example.com",
					phone: "123456789",
				};
				setUser(data);
				setLoading(false);
			} catch (error) {
				setError(true);
				setLoading(false);
			}
		};
		fetchUser();
	}, [userId]);
	if (loading) {
		return <PageLoader />;
	}
	if (error) {
		return <ErrorPage404 />;
	}
	return (
		<div className="details__container">
			<div className="details__container__header">
				<h1>Details</h1>
			</div>
			<hr />
			<div className="details__container__body">
				<div className="details__container__body__item">
					<img src="https://via.placeholder.com/150" alt="user" />
				</div>
				<div className="details__container__body__item">
					<h3>Name</h3>
					<p>{user.name}</p>
				</div>
				<div className="details__container__body__item">
					<h3>Email</h3>
					<p>{user.email}</p>
				</div>
				<div className="details__container__body__item">
					<h3>Phone</h3>
					<p>{user.phone}</p>
				</div>
			</div>
		</div>
	);
};

export default Details;
