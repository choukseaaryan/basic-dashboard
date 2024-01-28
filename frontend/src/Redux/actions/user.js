import MakeProtectedApiCall from "../../util/api";

const baseUrl = process.env.REACT_APP_BACKEND_URL;

export const GET_USERS = ({ payload = { str: "" }, id = "" }) => {
	return async (dispatch) => {
		try {
			const url = `${baseUrl}/get-users?str=${payload?.str}&id=${id}`;
			const res = await MakeProtectedApiCall(url, "get");

			if (res?.status >= 200 && res?.status < 300) {
				dispatch({ type: "GET_USERS", data: res?.data?.data });
				return { success: true, data: res?.data?.data };
			}

			return { success: false };
		} catch (error) {
			console.log("Error getting users: ", error);
		}
	};
};

export const ADD_USER = ({ payload }) => {
	return async (dispatch) => {
		try {
			const url = `${baseUrl}/add-user`;
			const res = await MakeProtectedApiCall(url, "post", payload);

			if (res?.status >= 200 && res?.status < 300) {
				dispatch({ type: "ADD_USER", data: res?.data?.data });
				return { success: true, data: res?.data?.data };
			}

			return { success: false };
		} catch (error) {
			console.log("Error adding user: ", error);
		}
	};
};

export const EDIT_USER = ({ payload }) => {
	return async (dispatch) => {
		try {
			const url = `${baseUrl}/edit-user`;
			const res = await MakeProtectedApiCall(url, "put", payload);

			if (res?.status >= 200 && res?.status < 300) {
				dispatch({ type: "EDIT_USER", data: res?.data?.data });
				return { success: true, data: res?.data?.data };
			}

			return { success: false };
		} catch (error) {
			console.log("Error editing user: ", error);
		}
	};
};

export const DELETE_USER = ({ id }) => {
	return async (dispatch) => {
		try {
			const url = `${baseUrl}/delete-user?id=${id}`;
			const res = await MakeProtectedApiCall(url, "delete");

			if (res?.status >= 200 && res?.status < 300) {
				return { success: true, data: id };
			}

			return { success: false };
		} catch (error) {
			console.log("Error deleting user: ", error);
		}
	};
};
