
const SET_WINDOW_SIZE = 'SET_WINDOW_SIZE';
const SET_IS_MOBILE = 'SET_IS_MOBILE';

const initialState = {
  isMobile: false,
  windowSize: {width: 0, height: 0}
}

export const mainSettingsReducer = (state = initialState, action: any) => {
  switch(action.type) {
    case (SET_IS_MOBILE): {
      const isMobile = /Mobile|webOS|BlackBerry|IEMobile|MeeGo|mini|Fennec|Windows Phone|Android|iP(ad|od|hone)/i.test(navigator.userAgent);
      return { ...state, isMobile: isMobile || action.width < 1000 }
    }
    case (SET_WINDOW_SIZE): {
      return {...state, windowSize: action.windowSize}
    }
    default: break;
  }
  return state
}

export const setIsMobile = (width: number) => {
  return { type: SET_IS_MOBILE, width }
}

export const setWindowSize = (windowSize: {width: number, height: number }) => {
  return { type: SET_WINDOW_SIZE, windowSize }
}