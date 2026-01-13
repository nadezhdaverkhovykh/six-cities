import ReviewsProps from '../../types/reviews';
import ReviewsItem from '../reviews-item/reviews-item';

type ReviewsListProps = {
  reviews: ReviewsProps[];
};

function ReviewsList({ reviews }: ReviewsListProps) {
  const sortedReviews = reviews
    .slice()
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  const isShownReviews = sortedReviews.slice(0, 10);
  return (
    <ul className="reviews__list">
      {isShownReviews.map((el) => (
        <ReviewsItem key={el.id} review={el} />
      ))}
    </ul>
  );
}
export default ReviewsList;
