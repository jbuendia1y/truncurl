import { createBrowserRouter, Navigate } from 'react-router-dom';
import { LazyLoadRoute, ProtectedRoute } from '../components';
import { Home } from '../pages';

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
        element: LazyLoadRoute('Login'),
      },
      {
        path: 'register',
        element: LazyLoadRoute('Register'),
      },
      {
        path: 'recover-password',
        children: [
          {
            path: '',
            element: LazyLoadRoute('RecoverPassword'),
          },
          {
            path: 'code',
            element: LazyLoadRoute('EnterCode'),
          },
          {
            path: 'reset',
            element: LazyLoadRoute('NewPassword'),
          },
        ],
      },
    ],
  },
  {
    path: '/dashboard',
    element: LazyLoadRoute('Dashboard'),
  },
  {
    path: '/links',
    element: <ProtectedRoute>{LazyLoadRoute('Links')}</ProtectedRoute>,
  },
  {
    path: '/tags',
    element: <ProtectedRoute>{LazyLoadRoute('Tags')}</ProtectedRoute>,
  },
  {
    path: '/settings',
    element: <ProtectedRoute>{LazyLoadRoute('Configuration')}</ProtectedRoute>,
    children: [
      {
        path: '',
        element: <Navigate to='profile' />,
      },
      {
        path: 'profile',
        element: LazyLoadRoute('Profile'),
      },
      {
        path: 'webhooks',
        element: LazyLoadRoute('Webhooks'),
      },
    ],
  },
]);

export default router;
