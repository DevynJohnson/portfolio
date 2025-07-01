import { useState } from 'react';
import { Container, Form, Button, Alert, Spinner } from 'react-bootstrap';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [validated, setValidated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertVariant, setAlertVariant] = useState('info');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    
    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Using Formspree for direct email sending
      const formspreeEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;
      
      if (!formspreeEndpoint) {
        throw new Error('Form endpoint not configured');
      }
      
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _replyto: formData.email, // This tells Formspree which email to reply to
        }),
      });

      if (response.ok) {
        setAlertMessage('Thank you! Your message has been sent successfully. I\'ll get back to you soon!');
        setAlertVariant('success');
        setShowAlert(true);
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        setValidated(false);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      const contactEmail = import.meta.env.VITE_CONTACT_EMAIL || 'dljohnson1313@gmail.com';
      setAlertMessage(`Sorry, there was an error sending your message. Please try again or contact me directly at ${contactEmail}`);
      setAlertVariant('danger');
      setShowAlert(true);
    } finally {
      setIsSubmitting(false);
      
      // Hide alert after 7 seconds
      setTimeout(() => setShowAlert(false), 7000);
    }
  };

  return (
    <div className='contactForm'>
      <Container className="contactFormContainer">
        {showAlert && (
          <Alert variant={alertVariant} dismissible onClose={() => setShowAlert(false)}>
            {alertMessage}
          </Alert>
        )}
        
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label htmlFor='name'>What is Your Name?</Form.Label>
            <Form.Control 
              className="formInput" 
              type='text' 
              id='name' 
              name='name' 
              value={formData.name} 
              onChange={handleChange} 
              required 
              placeholder="Enter your full name"
            />
            <Form.Control.Feedback type="invalid">
              Please provide your name.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label htmlFor='email'>Email Address</Form.Label>
            <Form.Control 
              className="formInput" 
              type='email' 
              id='email' 
              name='email' 
              value={formData.email} 
              onChange={handleChange}
              placeholder="your.email@example.com"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label htmlFor='subject'>What is the subject?</Form.Label>
            <Form.Control 
              className="formInput" 
              type='text' 
              id='subject' 
              name='subject' 
              value={formData.subject} 
              onChange={handleChange} 
              required
              placeholder="Brief subject line"
            />
            <Form.Control.Feedback type="invalid">
              Please provide a subject.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label htmlFor='message'>What is your message?</Form.Label>
            <Form.Control 
              as="textarea"
              className="formInput" 
              style={{height: '150px'}} 
              id='message' 
              name='message' 
              value={formData.message} 
              onChange={handleChange} 
              required
              placeholder="Tell me about your project, question, or opportunity..."
            />
            <Form.Control.Feedback type="invalid">
              Please provide a message.
            </Form.Control.Feedback>
          </Form.Group>

          <div className="d-grid">
            <Button 
              type="submit" 
              variant="primary" 
              size="lg"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                    className="me-2"
                  />
                  Sending Message...
                </>
              ) : (
                'Send Message'
              )}
            </Button>
          </div>
          
          <p className="text-center mt-2 text-muted">
            <small>*Your message will be sent directly to my email*</small>
          </p>
        </Form>
      </Container>
    </div>
  );
}

export default ContactForm;
