import keyMirror from 'key-mirror';

export default keyMirror({
  SERVICE_URL: "localhost:8080",
	LOGOUT_SUCCESS: SERVICE_URL + "/Home",
	CHECK_EMAIL_REQUEST: SERVICE_URL + "/checkEmail",
	CHECK_EMAIL_SUCCESS: "",
	CHECK_EMAIL_FAILURE: "",
	SIGN_UP_REQUEST: SERVICE_URL + "/register",
	SIGN_UP_SUCCESS: "",
	SIGN_UP_FAILURE: "",
	SET_CONFIRMATION_MESSAGE: "",
});
