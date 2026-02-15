import { AppRoute, AuthorizationStatus } from '../../constants/constants';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { getAuthorizationStatus } from '../../store/login/login-selectors';
type PrivateRouteProps = {
  authorizationStatus: AuthorizationStatus;
  children: JSX.Element;
};

function PrivateRoute({
  children,
  authorizationStatus,
}: PrivateRouteProps): JSX.Element {
  const currentStatus = useAppSelector(getAuthorizationStatus);
  return currentStatus === authorizationStatus ? (
    children
  ) : (
    <Navigate to={AppRoute.Root} />
  );
}
export default PrivateRoute;
