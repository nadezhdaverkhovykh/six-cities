import { useParams } from 'react-router-dom';
import CommentForm from '../../components/comment-form/comment-form';
import ReviewsList from '../../components/reviews-list/reviews-list';
import Map from '../../components/map/map';
import OtherPlacesList from '../../components/other-places-list/other-places-list';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { LoggedHeader } from '../../components/loged-header/loged-header';
import { Header } from '../../components/header/header';
import { AuthorizationStatus } from '../../constants/constants';
import { useEffect } from 'react';
import NotFoundScreen from '../../components/not-found-screen/not-found-screen';
import {
  fetchNearbyOffers,
  fetchCurrentOfferAction,
  fetchReviewsAction,
} from '../../store/api-actions';

function Offer() {
  const dispatch = useAppDispatch();
  const isLogged = useAppSelector(
    (state) => state.authorizationStatus === AuthorizationStatus.Auth
  );
  const offer = useAppSelector((state) => state.currentOffer);
  const review = useAppSelector((state) => state.reviews);
  const nearbyOffers = useAppSelector((state) => state.nearbyOffers).slice(
    0,
    3
  );

  const mappedOffer = [];
  if (offer) {
    mappedOffer.push(offer);
  }

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      dispatch(fetchCurrentOfferAction(id));
      dispatch(fetchReviewsAction(id));
      dispatch(fetchNearbyOffers(id));
    }
  }, [id, dispatch]);

  if (offer || review) {
    if (!offer) {
      return <NotFoundScreen />;
    }
    return (
      <div className="page">
        {isLogged ? <LoggedHeader /> : <Header />}
        <main className="page__main page__main--offer">
          <section className="offer">
            <div className="offer__gallery-container container">
              <div className="offer__gallery">
                {offer.images.map((el) => (
                  <div className="offer__image-wrapper" key={el}>
                    <img className="offer__image" src={el} alt="Photo studio" />
                  </div>
                ))}
              </div>
            </div>
            <div className="offer__container container">
              <div className="offer__wrapper">
                {offer.isPremium === true && (
                  <div className="offer__mark">
                    <span>isPremium</span>
                  </div>
                )}
                <div className="offer__name-wrapper">
                  <h1 className="offer__name">{offer.title}</h1>
                  <button
                    className="offer__bookmark-button button"
                    type="button"
                  >
                    <svg
                      className="offer__bookmark-icon"
                      width={31}
                      height={33}
                    >
                      <use xlinkHref="#icon-bookmark" />
                    </svg>
                    <span className="visually-hidden">To bookmarks</span>
                  </button>
                </div>
                <div className="offer__rating rating">
                  <div className="offer__stars rating__stars">
                    <span
                      style={{ width: `${Math.round(offer.rating) * 20}%` }}
                    />
                    <span className="visually-hidden">Rating</span>
                  </div>
                  <span className="offer__rating-value rating__value"></span>
                </div>
                <ul className="offer__features">
                  <li className="offer__feature offer__feature--entire">
                    {offer.type}
                  </li>
                  <li className="offer__feature offer__feature--bedrooms">
                    rooms {offer.bedrooms} Bedroom/s
                  </li>
                  <li className="offer__feature offer__feature--adults">
                    Max {offer.maxAdults} adults
                  </li>
                </ul>
                <div className="offer__price">
                  <b className="offer__price-value">€{offer.price}</b>
                  <span className="offer__price-text">&nbsp;night</span>
                </div>
                <div className="offer__inside">
                  <h2 className="offer__inside-title">What is inside</h2>

                  <ul className="offer__inside-list">
                    {offer.goods.map((el) => (
                      <li className="offer__inside-item" key={el}>
                        {el}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="offer__host">
                  <h2 className="offer__host-title">Meet the host</h2>
                  <div className="offer__host-user user">
                    <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                      <img
                        className="offer__avatar user__avatar"
                        src={offer.host.avatarUrl}
                        width={74}
                        height={74}
                        alt="Host avatar"
                      />
                    </div>
                    <span className="offer__user-name">{offer.host.name}</span>
                    {offer.host.isPro === true && (
                      <span className="offer__user-status">Pro</span>
                    )}
                  </div>
                  <div className="offer__description">
                    <p className="offer__text">{offer.description}</p>
                  </div>
                </div>
                <section className="offer__reviews reviews">
                  <h2 className="reviews__title">
                    Reviews{' '}
                    <span className="reviews__amount">
                      {review ? review.length : 0}
                    </span>
                  </h2>
                  <ReviewsList reviews={review} />
                  <CommentForm />
                </section>
              </div>
            </div>
            <section className="offer__map map">
              <Map offers={nearbyOffers} currentOffer={mappedOffer} />
            </section>
          </section>

          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">
                Other places in the neighbourhood
              </h2>
              <div className="near-places__list places__list">
                <OtherPlacesList offers={nearbyOffers} />,
              </div>
            </section>
          </div>
        </main>
      </div>
    );
  }
}
export default Offer;
