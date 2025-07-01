import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Immediate scroll to top when route changes
    // Using setTimeout to ensure DOM has updated
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant' // Changed to instant for immediate effect
      });
    }, 0);
  }, [pathname]);

  return null;
}

export default ScrollToTop;
