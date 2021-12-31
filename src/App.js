import { useEffect } from "react";
import "./styles/App.scss";
import { useDispatch } from "react-redux";
import {getUsers} from "./actions/userAction"

function App() {
  const dispatch = useDispatch();
  
  useEffect(() => {
   dispatch(getUsers());
  }, [])
  
  return (
    <div className="App">
      <h1>Hi Harsh</h1>
    </div>
  );
}

export default App;
