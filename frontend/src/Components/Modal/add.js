import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import "./modal.css";
import { ADD_USER, GET_USERS } from "../../Redux/actions/user";

const AddModal = ({ setIsOpen }) => {
	const [data, setData] = useState({
		name: "",
		email: "",
		phone: "",
	});

	const dispatch = useDispatch();

	const handleChange = (e) => {
		setData((prevData) => ({
			...prevData,
			[e.target.name]: e.target.value,
		}));
	};

	const handleAddUser = () => {
		const { name, email, phone } = data;

		if (!name || !email || !phone) {
			toast.error("Please fill all fields!");
			return;
		}

		const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
		const phoneRegex = /^[0-9]{10}$/;

		if (!emailRegex.test(email)) {
			toast.error("Please enter a valid email!");
			return;
		}

		if (!phoneRegex.test(phone)) {
			toast.error("Please enter a valid phone number!");
			return;
		}

		dispatch(ADD_USER({ payload: data })).then((res) => {
			if (res?.success) {
				dispatch(GET_USERS({}));
			}
		});
		setIsOpen(false);
	};
	return (
		<>
			<div className="dark__bg" onClick={() => setIsOpen(false)} />
			<div className="centered">
				<div className="modal">
					<div className="modal__header">
						<h5 className="heading">Add User</h5>
					</div>
					<button
						className="close__btn"
						onClick={() => setIsOpen(false)}
					>
						<i className="bx bx-x"></i>
					</button>
					<div className="modal__form">
						<p>
							<b>Name</b>
						</p>
						<input
							name="name"
							type="text"
							placeholder="Name"
							onChange={handleChange}
						/>
						<p>
							<b>Email</b>
						</p>
						<input
							name="email"
							type="email"
							placeholder="Email"
							onChange={handleChange}
						/>
						<p>
							<b>Phone</b>
						</p>
						<input
							name="phone"
							type="number"
							placeholder="Phone"
							onChange={handleChange}
						/>
					</div>
					<div className="modal__actions">
						<div className="actions__container">
							<button
								className="save__btn"
								onClick={handleAddUser}
							>
								Add
							</button>
							<button
								className="cancel__btn"
								onClick={() => setIsOpen(false)}
							>
								Cancel
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default AddModal;
