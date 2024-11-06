import { useParams } from "react-router-dom";

const MailboxDetails = (props) => {
  const { mailboxId } = useParams();
  const singleMailbox = props.mailboxes.find(
    (mailbox) => mailbox._id === Number(mailboxId)
  );

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
};

export default MailboxDetails;
