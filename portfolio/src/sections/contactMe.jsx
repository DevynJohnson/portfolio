import { Container } from 'react-bootstrap';
import { useState } from 'react';
function contactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  const handleSubmit = (e) => {
    e.preventDefault();

    const { subject, message } = formData;

    const mailtoLink = `mailto:dljohnson1313@gmail.com?subject=${subject}&body=${message}`;

    window.location.href = mailtoLink;
  }
  return (
    <div className='contactForm'>
        <Container className="contactFormContainer">
      <form onSubmit={handleSubmit}>
        <p><label htmlFor='name'>Name:</label></p>
        <input type='text' id='name' name='name' value={formData.name} onChange={handleChange} required></input>
        <p><label htmlFor='email'>Email:</label></p>
        <input type='email' id='email' name='email' value={formData.email} onChange={handleChange} required></input>
        <p><label htmlFor='subject'>Subject:</label></p>
        <input type='text' id='subject' name='subject' value={formData.subject} onChange={handleChange} required></input>
        <p><label htmlFor='message'>Message:</label></p>
        <textarea style={{width: '200px', height: '200px'}} id='message' name='message' value={formData.message} onChange={handleChange} required></textarea>
        <p><button type="submit">Submit</button></p>
      </form>
      </Container>
    </div>
  )
};
function ContactMe() {
  return (
    <div className='contactMePage'>
      <h4>
        Please reach out if you are interested in discussing job opportunities, freelance projects requests,
        collaborating on a project together, or have any questions for me! 
      </h4>
      <h4>
        You can reach me by <a href="mailto:dljohnson1313@gmail.com" target="_blank"> email, </a>
        connect with me on <a href="https://www.linkedin.com/in/devyn-johnson-a5259213b/"target="_blank">LinkedIn</a>, or use the form below to easily generate an email message for me.
      </h4>
      <h4>I look forward to hearing from you!</h4>
      {contactForm()}
    </div>
  );
}

export default ContactMe;
