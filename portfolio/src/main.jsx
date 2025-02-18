import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './index.css';

import App from './App.jsx';
import Error from './sections/Error.jsx';
import AboutMe from './sections/AboutMe.jsx';
import ContactMe from './sections/ContactMe.jsx';
import Portfolio from './sections/Portfolio.jsx';
import Resume from './sections/Resume.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <AboutMe />,
      },
      {
        path: '/portfolio',
        element: <Portfolio />,
      },
      {
        path: '/contact',
        element: <ContactMe />,
      },
      {
        path: '/resume',
        element: <Resume />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);