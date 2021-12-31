import { GET_USER_DATA } from "../actions/actionTypes";

const initState = {
  user: [],
};

const gamesReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_USER_DATA:
      return { ...state, user: action.payload.users };
    default:
      return { ...state };
  }
};

export default gamesReducer;
