
const SET_SHOW_AUTHORIZATION = 'SET_SHOW_AUTHORIZATION';
const SET_SHOW_REGISTRATION = 'SET_SHOW_REGISTRATION';

const initialState = {
  showAuthorization: false,
  showRegistration: false,
}

export const mainSettingsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case (SET_SHOW_AUTHORIZATION): {
      return { ...state, showAuthorization: action.show }
    }
    case (SET_SHOW_REGISTRATION): {
      return { ...state, showRegistration: action.show }
    }
    default: break;
  }
  return state
}

export const setShowAuthorization = (show: boolean) => {
  return { type: SET_SHOW_AUTHORIZATION, show }
}

export const setShowRegistration = (show: boolean) => {
  return { type: SET_SHOW_REGISTRATION, show }
}