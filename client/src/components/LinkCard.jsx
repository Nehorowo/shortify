const LinkCard = ({ link }) => {
  return (
    <>
      <h2>Link card</h2>

      <p>
        Your link:{" "}
        <a href={link.to} target="_blank" rel="noopener noreferrer">
          {link.to}
        </a>
      </p>
      <p>
        From:{" "}
        <a href={link.from} target="_blank" rel="noopener noreferrer">
          {link.from}
        </a>
      </p>
      <p>
        Clicks count: <strong>{link.clicks}</strong>
      </p>
      <p>
        Creation date: <strong>{new Date(link.date).toLocaleDateString()}</strong>
      </p>
    </>
  );
};

export default LinkCard;
