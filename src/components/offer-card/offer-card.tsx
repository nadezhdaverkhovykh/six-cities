import { Link } from 'react-router-dom';
import { OffersProps } from '../../types/offers';
export type OfferCardProps = {
  offer: OffersProps;
  onOfferEnter?: (id: string) => void;
};

function OfferCard({ onOfferEnter, offer }: OfferCardProps) {
  return (
    <article
      className="cities__card place-card"
      onMouseEnter={() => {
        if (onOfferEnter) {
          onOfferEnter(offer.id);
        }
      }}
      onMouseLeave={() => {
        if (onOfferEnter) {
          onOfferEnter('');
        }
      }}
    >
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img
            className="place-card__image"
            src={offer.previewImage}
            width={260}
            height={200}
            alt="Place image"
          />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">{offer.price}$</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button
            className="place-card__bookmark-button place-card__bookmark-button--active button"
            type="button"
          >
            <svg className="place-card__bookmark-icon" width={18} height={19}>
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${Math.round(offer.rating) * 20}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <Link to={`/offer/${offer.id}`}>
          <h2 className="place-card__name">{offer.title}</h2>
        </Link>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}
export default OfferCard;
