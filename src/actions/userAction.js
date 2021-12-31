import axios from "axios";
import { GET_USER_DATA } from "./actionTypes";

//Action Creator

export const getUsers = () => async (dispatch) => {
  //FETCH AXIOS
  const userData = await axios.get(
    "https://reqres.in/api/users?page=1"
  );

    


  dispatch({
    type: GET_USER_DATA,
    payload: {
      users: userData.data.data,
    },
  });
};

//a8ce4f4d40da41459a13256a033a6850
