import Class from '@/pages/class';
import Director from '@/pages/director';
import Home from '@/pages/home';
import Login from '@/pages/login';
import MainLayout from '@/pages/mainLayout';
import Student from '@/pages/student';
import Subject from '@/pages/subject';
import Teacher from '@/pages/teacher';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />, // Página de login renderizada sem layout
  },
  {
    path: '/class',
    element: <Class />,
  },
  {
    path: '/',
    element: <MainLayout />, // Layout principal com Header e Wrapper
    children: [
      // Outras rotas que herdam o MainLayout
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/director',
        element: <Director />,
      },
      {
        path: '/teacher',
        element: <Teacher />,
      },
      {
        path: '/student',
        element: <Student />,
      },
      {
        path: '/subject',
        element: <Subject />,
      }
    ],
  },
]);

export default router