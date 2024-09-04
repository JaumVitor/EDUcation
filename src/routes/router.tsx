import Director from '@/pages/director';
import Home from '@/pages/home';
import Login from '@/pages/login';
import MainLayout from '@/pages/mainLayout';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />, // Página de login renderizada sem layout
  },
  {
    path: '/',
    element: <MainLayout />, // Layout principal com Header e Wrapper
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/director',
        element: <Director />,
      }
      // Outras rotas que herdam o MainLayout
    ],
  },
]);

export default router