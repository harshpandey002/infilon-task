import { GET_USER_DATA, DELETE_USER_DATA } from "../actions/actionTypes";

const initState = {
  user: [],
};

const gamesReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_USER_DATA: {
      localStorage.setItem("users", JSON.stringify(action.payload));
      return { ...state, user: action.payload };
    }
    case DELETE_USER_DATA: {
      const filterUsers = state.user.filter(
        (user) => user.id !== action.payload
      );
      localStorage.removeItem("users");
      localStorage.setItem("users", JSON.stringify(filterUsers));
      return { ...state, user: filterUsers };
    }
    default:
      return { ...state };
  }
};

export default gamesReducer;
