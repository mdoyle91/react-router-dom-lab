import { Link } from "react-router-dom";

const MailboxList = (props) => {
  if (!props.mailboxes) {
    return <h1> Mailbox Not Found... </h1>;
  } else {
    return (
      <>
        <h2>Mailboxes</h2>
        <ul>
          {props.mailboxes.map((currentMailbox) => (
            <li key={currentMailbox._id}>
              <Link to={`/mailboxes/${currentMailbox._id}`}>
                Mailbox #{currentMailbox._id}
              </Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
};

export default MailboxList;
