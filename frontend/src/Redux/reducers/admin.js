const initialState = {
  profileInfo: sessionStorage.getItem('profileInfo') === undefined ? JSON.parse(sessionStorage.getItem('profileInfo')) : null,
	// profileInfo: null,
};


const adminReducer = (state = initialState, action) => {
	switch (action.type) {
		case "HANDLE_LOGIN":
			sessionStorage.setItem('profileInfo', JSON.stringify(action.data))
			return {
				...state,
				profileInfo: action.data,
			};
		case "HANDLE_SIGNUP":
			return {
				...state,
				profileInfo: action.data,
			};
		default:
			return state;
	}
};

export default adminReducer;
