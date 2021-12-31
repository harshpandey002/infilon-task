import "../styles/UserDetails.scss";

export default function UserDetails({ data }) {
  return (
    <tr>
      <td>{data.id}</td>
      <td>{data.email}</td>
      <td>{data.first_name}</td>
      <td>{data.last_name}</td>
      <td>{data.avatar}</td>
    </tr>
  );
}
