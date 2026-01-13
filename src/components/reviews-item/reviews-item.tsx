import ReviewsProps from '../../types/reviews';

type ReviewProp = {
  review: ReviewsProps;
};

function ReviewsItem({ review }: ReviewProp) {
  const date = new Date(review.date);
  const month = date.toLocaleString('ru', { month: 'long' });
  const year = date.getFullYear();
  const fullDate = `${month} ${year}`;
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={review.user.avatarUrl}
            width={54}
            height={54}
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name">{review.user.name}</span>
        {review.user.isPro === true && <span>Pro</span>}
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: `${Math.round(review.rating) * 20}%` }} />
            <span className="visually-hidden"></span>
          </div>
        </div>
        <p className="reviews__text">{review.comment}</p>
        <time className="reviews__time">{fullDate}</time>
      </div>
    </li>
  );
}
export default ReviewsItem;
