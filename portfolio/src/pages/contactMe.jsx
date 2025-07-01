// No bootstrap grid imports needed
import ContactForm from '../components/ContactForm';
import "../styles/page-common.css";
import "../styles/contact.css";

function ContactMe() {
  return (
    <div className="page-wrapper">
      <div className="page-container">
        <div className="page-content-card">
              <div className="page-header">
                <h2 className="page-title">Get In Touch</h2>
                <div className="page-subtitle">
                  Let&apos;s Build Something Amazing Together
                </div>
              </div>

              <div className="contactMe-intro">
                <p className="contactMe-text">
                  I&apos;m always excited to discuss new opportunities, whether you&apos;re looking for 
                  a full-time developer, need help with a freelance project, or want to collaborate 
                  on building accessible technology that makes a difference.
                </p>
                
                <p className="contactMe-text">
                  Feel free to reach out through any of these channels:
                </p>

                <div className="contactMe-links">
                  <a 
                    href="https://www.linkedin.com/in/devyn-johnson-a5259213b/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="contactMe-link"
                  >
                    Connect on LinkedIn
                  </a>
                  <a 
                    href="https://www.github.com/DevynJohnson" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="contactMe-link"
                  >
                    View My GitHub
                  </a>
                </div>

                <p className="contactMe-text">
                  Or use the form below to send me a message directly. I&apos;ll get back to you as soon as possible!
                </p>
              </div>

              <ContactForm />
            </div>
          </div>
    </div>
  );
}

export default ContactMe;
