import { Link } from "react-router-dom";

const LinkList = ({ links }) => {
  if (links.length === 0) {
    return <p className="center">No links exist</p>;
  }
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>№</th>
            <th>Original</th>
            <th>Shortened</th>
            <th>Open</th>
          </tr>
        </thead>

        <tbody>
          {links.map((link, index) => {
            return (
              <tr>
                <td>{index + 1}</td>
                <td>{link.from}</td>
                <td>{link.to}</td>
                <td>
                  <Link to={`/detail/${link._id}`}>Open link</Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default LinkList;
