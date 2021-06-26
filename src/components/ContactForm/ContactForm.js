import { useState } from 'react';

const labelStyle = {
  width: 200,
  display: 'inline-block'
};

function ContactForm() {
  const [message, setMessage] = useState('');
  const [nameString, setNameString] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'name') {
      setNameString(event.target.value);
    } else if (name === 'message') {
      setMessage(event.target.value);
    }
  };

  const handleSubmit = (event) => {
    console.log(event.target.name);
    event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label style={labelStyle}>Name:</label>
          <input name="name" type="text" onChange={handleChange} />
        </div>
        <div>
          <label style={labelStyle} htmlFor="">
            Message:{' '}
          </label>
          <textarea name="message" onChange={handleChange} />
        </div>
        <div>
          <button type="submit">Send</button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
