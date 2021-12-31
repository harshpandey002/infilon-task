import "../styles/Home.scss";
import Table from "react-bootstrap/Table";

//Redux
import { useSelector } from "react-redux";
import UserDetails from "./userDetails";

export default function Home() {
  const userData = useSelector((state) => state.users);

  console.log();
  return (
    <div className="home--container">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Email</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Avatar</th>
          </tr>
        </thead>
        <tbody>
          {userData.user.map((data) => (
            <UserDetails key={data.id} data={data} />
          ))}
        </tbody>
      </Table>
    </div>
  );
}
