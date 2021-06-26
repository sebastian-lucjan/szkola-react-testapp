import React from 'react'; //nie trzeba dodawać od react 17

import ContactForm from '../components/ContactForm/ContactForm';

export function Contact() {
  return (
    <>
      <h1>Contact</h1>
      <p>How to contact us</p>
      <ContactForm />
    </>
  );
}
