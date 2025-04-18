import { Container } from 'react-bootstrap';
import { useState } from 'react';
function ContactForm() {
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
        <p><label htmlFor='name'>What is Your Name?</label></p>
        <input className="formInput" type='text' id='name' name='name' value={formData.name} onChange={handleChange} required></input>
        {/* <p><label htmlFor='email'>Email:</label></p>
        <input type='email' id='email' name='email' value={formData.email} onChange={handleChange} required></input> */}
        <p><label htmlFor='subject'>What is the subject?</label></p>
        <input className="formInput" type='text' id='subject' name='subject' value={formData.subject} onChange={handleChange} required></input>
        <p><label htmlFor='message'>What is your message?</label></p>
        <textarea className="formInput" style={{width: '100%', height: '200px'}} id='message' name='message' value={formData.message} onChange={handleChange} required></textarea>
        <p><button type="submit">Send Message From Your Email Client</button></p>
        *Clicking The Button Will Open a New Window*
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
        You can connect with me on <a href="https://www.linkedin.com/in/devyn-johnson-a5259213b/"target="_blank">LinkedIn</a>, view my profile at <a href="https://www.github.com/DevynJohnson"target="_blank">Github</a>, or feel free to use the form below to easily create an email. Click the button below to send your form data to your favorite email client and send the message!
      </h4>
      <h4>I look forward to hearing from you!</h4>
      {ContactForm()}
    </div>
  );
}

export default ContactMe;
