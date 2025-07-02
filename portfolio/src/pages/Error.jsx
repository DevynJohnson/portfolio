import { useRouteError, Link } from 'react-router-dom';
import { Container, Alert } from 'react-bootstrap';
import { useState } from 'react';
import Header from '../components/Header';
import { ThemeProvider } from '../contexts/ThemeContext';
import '../styles/error.css';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  // State for error reporting
  const [isReporting, setIsReporting] = useState(false);
  const [reportStatus, setReportStatus] = useState(null); // 'success', 'error', or null

  // Extract error code and message
  const errorCode = error?.status || error?.code || '500';
  const errorMessage = error?.statusText || error?.message || 'Internal Server Error';
  
  // Custom messages based on error codes
  const getErrorDetails = (code) => {
    switch (String(code)) {
      case '404':
        return {
          title: 'Page Not Found',
          description: 'The requested page could not be found. It may have been moved, deleted, or the URL may be incorrect.',
          suggestion: 'Please check the URL or navigate to another page.'
        };
      case '403':
        return {
          title: 'Access Forbidden',
          description: 'You do not have permission to access this resource.',
          suggestion: 'Please contact the administrator if you believe this is an error.'
        };
      case '500':
        return {
          title: 'Internal Server Error',
          description: 'An internal server error has occurred. Our team has been notified and is working to resolve the issue.',
          suggestion: 'Please try again later or contact support if the problem persists.'
        };
      default:
        return {
          title: 'Unexpected Error',
          description: 'An unexpected error has occurred while processing your request.',
          suggestion: 'Please try again or contact support if the problem continues.'
        };
    }
  };

  const errorDetails = getErrorDetails(errorCode);

  // Function to report the error via Formspree
  const reportError = async () => {
    setIsReporting(true);
    setReportStatus(null);

    try {
      const formspreeEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;
      
      if (!formspreeEndpoint) {
        // Fallback: Show error with contact info instead of failing silently
        const contactEmail = import.meta.env.VITE_CONTACT_EMAIL || 'dljohnson1313@gmail.com';
        setReportStatus('fallback');
        setIsReporting(false);
        return;
      }

      // Gather error details for the report
      const errorReport = {
        subject: `Portfolio Error Report - ${errorCode}`,
        message: `An error occurred on the portfolio website:

Error Code: ${errorCode}
Error Message: ${errorMessage}
URL: ${window.location.href}
User Agent: ${navigator.userAgent}
Timestamp: ${new Date().toISOString()}
Referrer: ${document.referrer || 'Direct access'}

Additional Technical Details:
${error?.stack ? `Stack Trace:\n${error.stack}` : 'No stack trace available'}

Error Object: ${JSON.stringify(error, null, 2)}`,
        name: 'Portfolio Error Reporter',
        email: 'noreply@devynjohnson.me',
        _subject: `Portfolio Error Report - ${errorCode}`,
      };

      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(errorReport),
      });

      if (response.ok) {
        setReportStatus('success');
      } else {
        throw new Error('Failed to send error report');
      }
    } catch (reportError) {
      console.error('Error reporting failed:', reportError);
      setReportStatus('error');
    } finally {
      setIsReporting(false);
      
      // Clear status after 5 seconds
      setTimeout(() => setReportStatus(null), 5000);
    }
  };

  return (
    <ThemeProvider>
      <Header />
      <div className="errorPage">
        <Container className="error-container">
          <div className="error-content">
            {/* Error Code Display */}
            <div className="error-code-display">
              <span className="error-code">{errorCode}</span>
            </div>
            
            {/* Error Title */}
            <h1 className="error-title">{errorDetails.title}</h1>
            
            {/* Error Description */}
            <p className="error-description">{errorDetails.description}</p>
            
            {/* Technical Details (only in development) */}
            {import.meta.env.DEV && (
              <div className="error-technical">
                <details>
                  <summary>Technical Details</summary>
                  <p className="error-message">
                    <code>{errorMessage}</code>
                  </p>
                </details>
              </div>
            )}
            
            {/* Status Alert for Error Reporting */}
            {reportStatus && (
              <Alert 
                variant={reportStatus === 'success' ? 'success' : reportStatus === 'fallback' ? 'info' : 'danger'} 
                className="error-report-alert"
              >
                {reportStatus === 'success' 
                  ? 'Thank you! The error has been reported and I\'ll investigate the issue.' 
                  : reportStatus === 'fallback'
                  ? `Error reporting is not configured in development. Please contact me directly at ${import.meta.env.VITE_CONTACT_EMAIL || 'dljohnson1313@gmail.com'} with details about this error.`
                  : 'Failed to send error report. Please try the contact form or email me directly.'
                }
              </Alert>
            )}

            {/* Suggestion */}
            <p className="error-suggestion">{errorDetails.suggestion}</p>
            
            {/* Action Buttons */}
            <div className="error-actions">
              <Link to="/" className="btn btn-primary error-btn-primary">
                Return Home
              </Link>
              <button 
                onClick={() => window.history.back()} 
                className="btn btn-outline-secondary error-btn-secondary"
              >
                Go Back
              </button>
              <button 
                onClick={reportError}
                disabled={isReporting}
                className="btn btn-outline-warning error-btn-report"
              >
                {isReporting ? 'Reporting...' : 'Report Issue'}
              </button>
            </div>
          </div>
        </Container>
      </div>
    </ThemeProvider>
  );
}