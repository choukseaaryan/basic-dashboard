import React from "react";
import "./modal.css";

const EditModal = ({ setIsOpen, user }) => {
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
						<input name="name" type="text" placeholder="Name" value={user?.name} />
						<p>
							<b>Email</b>
						</p>
						<input name="email" type="email" placeholder="Email" value={user?.email} />
						<p>
							<b>Phone</b>
						</p>
						<input name="phone" type="number" placeholder="Phone" value={user?.phone} />
					</div>
					<div className="modal__actions">
						<div className="actions__container">
							<button
								className="save__btn"
								onClick={() => setIsOpen(false)}
							>
								Save
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
