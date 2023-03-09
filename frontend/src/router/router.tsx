import { createBrowserRouter, Navigate } from 'react-router-dom';
import { ProtectedRoute } from '../components';
import {
  Configuration,
  EnterCode,
  Home,
  Links,
  Login,
  NewPassword,
  RecoverPassword,
  Register,
  Tags,
} from '../pages';
import { Profile, Webhooks } from '../pages/config/views';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/auth',
    children: [
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'register',
        element: <Register />,
      },
      {
        path: 'recover-password',
        children: [
          {
            path: '',
            element: <RecoverPassword />,
          },
          {
            path: 'code',
            element: <EnterCode />,
          },
          {
            path: 'reset',
            element: <NewPassword />,
          },
        ],
      },
    ],
  },
  {
    path: '/links',
    element: (
      <ProtectedRoute>
        <Links />
      </ProtectedRoute>
    ),
  },
  {
    path: '/tags',
    element: (
      <ProtectedRoute>
        <Tags />
      </ProtectedRoute>
    ),
  },
  {
    path: '/settings',
    element: (
      <ProtectedRoute>
        <Configuration />
      </ProtectedRoute>
    ),
    children: [
      {
        path: '',
        element: <Navigate to='profile' />,
      },
      {
        path: 'profile',
        element: <Profile />,
      },
      {
        path: 'webhooks',
        element: <Webhooks />,
      },
    ],
  },
]);

export default router;
