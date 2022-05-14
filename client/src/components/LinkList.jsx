import React from "react";
import { Link } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-regular-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { Container, Grid } from "@mui/material";

const LinkList = ({ links }) => {
  const [userLinks, setUserLinks] = React.useState([]);

  React.useEffect(() => {
    setUserLinks(
      links.map((i, index) => {
        return { ...i, isCopied: false, id: index + 1 };
      })
    );
  }, [links]);

  const copyLink = (index) => {
    let newLinks = [...userLinks];
    newLinks[index].isCopied = true;
    setUserLinks(newLinks);
  };

  if (links.length === 0) {
    return <p className="center">No links exist</p>;
  }
  return (
    <Container maxWidth="md">
      <Grid container spacing={3}>
        <table>
          <thead>
            <tr>
              <th>№</th>
              <th>Original</th>
              <th>Shortened</th>
              <th>Open</th>
              <th>Copy</th>
            </tr>
          </thead>

          <tbody>
            {userLinks.map((link, index) => {
              return (
                <tr>
                  <td>{index + 1}</td>
                  <td>{link.from}</td>
                  <CopyToClipboard text={link.to}>
                    <td>{link.to}</td>
                  </CopyToClipboard>
                  <td>
                    <Link to={`/detail/${link._id}`}>Open details</Link>
                  </td>
                  <td>
                    {link.isCopied === false ? (
                      <CopyToClipboard
                        text={link.to}
                        onCopy={() => copyLink(index)}
                      >
                        <FontAwesomeIcon icon={faCopy} />
                      </CopyToClipboard>
                    ) : (
                      <FontAwesomeIcon icon={faCheck} />
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Grid>
    </Container>
  );
};

export default LinkList;
