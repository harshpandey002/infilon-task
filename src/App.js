import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {getUsers} from "./actions/userAction"
import Home from "./components/Home";
import "./styles/App.scss";

function App() {
  const dispatch = useDispatch();
  
  useEffect(() => {
   dispatch(getUsers());
  })
  
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
