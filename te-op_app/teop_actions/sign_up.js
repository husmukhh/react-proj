

const ActionTypes = require('../app_constants/url_path_constants.js').default;
var existingEmail = null

function checkEmailRequest() {
  return {
    type: ActionTypes.CHECK_EMAIL_REQUEST
  };
}

function checkEmailSuccess(result) {
  return {
    type: ActionTypes.CHECK_EMAIL_SUCCESS,
    payload: result
  };
}

function checkEmailFailure(error) {
  return {
    type: ActionTypes.CHECK_EMAIL_FAILURE,
    payload: error
  };
}

export function checkEmail(email) {
  if (!existingEmail) existingEmail = email
  return (dispatch) => {
    dispatch(checkEmailRequest());
    setTimeout(()=>{
	    if (existingEmail == email) {
		    dispatch(message('This email address is already in the list'))
		    dispatch(checkEmailFailure('Existing email'))
	    } else {
		    dispatch(checkEmailSuccess(email));
	    }
    }, 1000)
  };
}


function signUpRequest() {
  return {
    type: ActionTypes.SIGN_UP_REQUEST
  };
}

function signUpSuccess(result) {
  return {
    type: ActionTypes.SIGN_UP_SUCCESS,
    payload: result
  };
}

function signUpFailure(error) {
  return {
    type: ActionTypes.SIGN_UP_FAILURE,
    payload: error
  };
}


function checkEmailRequest() {
  return {
    type: ActionTypes.CHECK_EMAIL_REQUEST
  };
}


export function signUp(email,  firstname, lastname,password) {

setTimeout(()=>{
    fetch(signUpRequest(), {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
      username : email,
      firstname : firstname,
      lastname: lastname
      password: password,
    })
    }).then((response) => response.json()).then((responseJson) => {
          signUpSuccess("OK")
      })
      .catch((error) => {

      })

 }, 1000)

}
