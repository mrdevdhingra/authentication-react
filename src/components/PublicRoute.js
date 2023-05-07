import { Outlet, Navigate } from 'react-router-dom';
import { auth } from '../firebase';

const PublicRoute = () => {
  const user = auth.currentUser;

  return !user ? <Outlet /> : <Navigate to="/home" />;
};

export default PublicRoute;
