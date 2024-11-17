import { useParams } from "react-router-dom";

const MailboxDetails = (props) => {
  const { mailboxId } = useParams();
  const singleMailbox = props.mailboxes.find(
    (mailbox) => mailbox._id === Number(mailboxId)
  );
  if (!singleMailbox) {
    return <h1> Mailbox Not Found... </h1>;
  } else {
    return (
      <>
        <dl className="mail-box">
          <dt>Mailbox #{singleMailbox._id}</dt>
          <dt>Box Size:</dt>
          <dd>{singleMailbox.boxSize}</dd>
          <dt>Boxholder:</dt>
          <dd> {singleMailbox.boxholder}</dd>
        </dl>
      </>
    );
  }
};

export default MailboxDetails;
