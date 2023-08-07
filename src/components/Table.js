import satData from "./satData";

const Table = ({ sat }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Type of Satellite</th>
          <th>Launch Date</th>
          <th>Status</th>
        </tr>
      </thead>

      <tbody> {/*renders the data based on button clicked*/}
        {sat.map(sat => (
          <tr key={sat.id}>
            <td>{sat.name}</td>
            <td>{sat.type}</td>
            <td>{sat.launchDate}</td>
            <td>
              {sat.operational ? 'Active' : 'InActive'}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;