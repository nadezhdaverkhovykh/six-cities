import OffersList from '../../components/offers-list/offers-list';
import CitiesList from '../../components/cities-list/cities-list';
import { useAppSelector } from '../../hooks';
import { useState } from 'react';
import { SortOptions } from '../../components/sort-options/sort-options';
import { OffersProps } from '../../types/offers';
import { LoggedHeader } from '../../components/loged-header/loged-header';
import { Header } from '../../components/header/header';
import { useMemo } from 'react';
import MemoMap from '../../components/map/map';
import { getOffers } from '../../store/offers/offers-selectors';
import { getSortType } from '../../store/offers/offers-selectors';
import { getAuthorizationStatus } from '../../store/login/login-selectors';
import { getChosenCity } from '../../store/offers/offers-selectors';
import { AuthorizationStatus } from '../../constants/constants';

function MainPage(): JSX.Element {
  const [selectedPoint, setSelectedPoint] = useState<OffersProps | undefined>(
    undefined,
  );
  const allOffers = useAppSelector(getOffers);
  const sortType = useAppSelector(getSortType);
  const chosenCity = useAppSelector(getChosenCity);

  const handleListItemHover = (OfferId: string) => {
    const currentPoint = allOffers.find((el) => el.id === OfferId);
    setSelectedPoint(currentPoint);
  };

  const filteredOffers = useMemo(
    () => allOffers.filter((el) => el.city.name === chosenCity),
    [allOffers, chosenCity],
  );
  const offersForList = useMemo(() => {
    const filtered = allOffers.filter((el) => el.city.name === chosenCity);

    const sorted = [...filtered];

    switch (sortType) {
      case 'Price: low to high':
        sorted.sort((a, b) => a.price - b.price);
        break;
      case 'Price: high to low':
        sorted.sort((a, b) => b.price - a.price);
        break;
      case 'Top rated first':
        sorted.sort((a, b) => b.rating - a.rating);
        break;
    }

    return sorted;
  }, [allOffers, chosenCity, sortType]);

  const isLogged = useAppSelector(getAuthorizationStatus);
  return (
    <div className="page page--gray page--main">
      {isLogged === AuthorizationStatus.Auth ? <LoggedHeader /> : <Header />}
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <CitiesList />
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">
                {filteredOffers.length} places to stay in {chosenCity}
              </b>
              <SortOptions />
              <div className="cities__places-list places__list tabs__content">
                <OffersList
                  onListItemHover={handleListItemHover}
                  offers={offersForList}
                />
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <MemoMap
                  offers={filteredOffers}
                  selectedPoint={selectedPoint}
                />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
export default MainPage;
