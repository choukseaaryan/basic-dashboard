import React from "react";
import { useDispatch } from "react-redux";
import "./modal.css";
import { DELETE_USER, GET_USERS } from "../../Redux/actions/user";

const DeleteModal = ({ setIsOpen, id }) => {
	const dispatch = useDispatch();

	const handleDelete = () => {
		dispatch(DELETE_USER({ id })).then((res) => {
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
						<h5 className="heading">Delete User</h5>
					</div>
					<button
						className="close__btn"
						onClick={() => setIsOpen(false)}
					>
						<i className="bx bx-x"></i>
					</button>
					<div className="modal__content">
						<p>Are you sure you want to delete the user?</p>
					</div>
					<div className="modal__actions">
						<div className="actions__container">
							<button
								className="delete__btn"
								onClick={handleDelete}
							>
								Delete
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

export default DeleteModal;
