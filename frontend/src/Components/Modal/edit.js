import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./modal.css";
import { EDIT_USER, GET_USERS } from "../../Redux/actions/user";

const EditModal = ({ setIsOpen, user }) => {
	const [data, setData] = useState({
		id: user?._id,
		name: user?.name,
		email: user?.email,
		phone: user?.phone,
	});

	const [loading, setLoading] = useState(false);
	
	const dispatch = useDispatch();
	
	const handleEditUser = () => {
		setLoading(true);
		dispatch(EDIT_USER({ payload: data })).then((res) => {
			if (res?.success) {
				dispatch(GET_USERS({}));
				setLoading(false);
				setIsOpen(false);
			}
		});
	}

	const handleChange = (e) => {
		setData((prevData) => ({
			...prevData,
			[e.target.name]: e.target.value,
		}));
	};

	return (
		<>
			<div className="dark__bg" onClick={() => setIsOpen(false)} />
			<div className="centered">
				<div className="modal">
					<div className="modal__header">
						<h5 className="heading">Edit User</h5>
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
						<input name="name" type="text" placeholder="Name" value={data?.name} onChange={handleChange} />
						<p>
							<b>Email</b>
						</p>
						<input name="email" type="email" placeholder="Email" value={data?.email} onChange={handleChange} />
						<p>
							<b>Phone</b>
						</p>
						<input name="phone" type="number" placeholder="Phone" value={data?.phone} onChange={handleChange} />
					</div>
					<div className="modal__actions">
						<div className="actions__container">
							<button
								disabled={loading}
								className="save__btn"
								onClick={handleEditUser}
							>
								{loading ? "Saving..." : "Save"}
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

export default EditModal;
