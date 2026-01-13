import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../constants/constants';
import MainPage from '../../pages/main-page/main-page';
import LoginForm from '../../pages/login-form/login-form';
import FavoriteOffers from '../../pages/favorite-offers/favorite-offers';
import Offer from '../../pages/offer/offer';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-route';
import { useAppSelector } from '../../hooks';
import LoadingScreen from '../../pages/favorite-empty-offers/loading-screen/loading-screen';

function App() {
  const allOffers = useAppSelector((state) => state.offers);
  const isOffersDataLoading = useAppSelector(
    (state) => state.isOffersDataLoading
  );
  const authorizationStatus = useAppSelector(
    (state) => state.authorizationStatus
  );
  if (
    authorizationStatus === AuthorizationStatus.Unknown ||
    isOffersDataLoading
  ) {
    return <LoadingScreen />;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Root} element={<MainPage />} />

        <Route
          path={AppRoute.Login}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
              <LoginForm />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
              <FavoriteOffers offers={allOffers} />
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.Offer} element={<Offer />} />
        <Route path="*" element={<NotFoundScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
