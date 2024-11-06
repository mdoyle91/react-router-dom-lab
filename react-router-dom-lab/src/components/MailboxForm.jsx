import { useState } from "react";
import { useNavigate } from "react-router-dom";

const initialState = {
  boxSize: "Small",
  boxholder: "",
};

const MailboxForm = (props) => {
  const [formData, setFormData] = useState(initialState);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addMailbox(formData);
    setFormData(initialState);
    navigate("/mailboxes");
  };

  const handleChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value });
  };

  return (
    <main>
      <h2>New Mailbox</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="boxholder">Name:</label>
        <input
          type="text"
          id="boxholder" //I don't understand what the name portion does.
          name="boxholder"
          value={formData.name}
          onChange={handleChange}
        />
        <label htmlFor="boxSize">Choose a box size:</label>
        <select
          name="boxSize"
          id="boxSize"
          value={formData.boxSize}
          onChange={handleChange}
        >
          <option value="Small" default>
            Small
          </option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </main>
  );
};

export default MailboxForm;
