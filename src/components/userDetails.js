import "../styles/UserDetails.scss";
import Button from "react-bootstrap/Button";
import { deleteUser } from "../actions/userAction";
import { useDispatch } from "react-redux";

export default function UserDetails({ data }) {
  const dispatch = useDispatch();

  return (
    <tr>
      <td>{data.id}</td>
      <td>{data.email}</td>
      <td>{data.first_name}</td>
      <td>{data.last_name}</td>
      <td className="avatar">
        <img src={data.avatar} alt={data.first_name} />
      </td>
      <td className="cta">
        <Button variant="primary">Edit</Button>
        <Button onClick={() => dispatch(deleteUser(data.id))} variant="danger">
          Delete
        </Button>
      </td>
    </tr>
  );
}
