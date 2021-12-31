import axios from "axios";
import { GET_USER_DATA, DELETE_USER_DATA } from "./actionTypes";

//Action Creator

export const getUsers = () => async (dispatch) => {
  //FETCH AXIOS
  const userData = await axios.get("https://reqres.in/api/users?page=1");

  dispatch({
    type: GET_USER_DATA,
    payload: userData.data.data,
  });
};

export const deleteUser = (id) => (dispatch) => {
  dispatch({
    type: DELETE_USER_DATA,
    payload: id,
  });
};
