import { useState, Fragment } from 'react';
import { useAppDispatch } from '../../hooks';
import { postReviewAction } from '../../store/api-actions';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { AuthorizationStatus } from '../../constants/constants';

type starsProps = {
  id: number;
  title: string;
};

const stars: starsProps[] = [
  {
    id: 5,
    title: 'perfect',
  },
  {
    id: 4,
    title: 'good',
  },
  {
    id: 3,
    title: 'not bad',
  },
  {
    id: 2,
    title: 'badly',
  },
  {
    id: 1,
    title: 'terribly',
  },
];

function CommentForm() {
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState({
    rating: '',
    review: '',
  });
  const [isPosting, isPosted] = useState(false);
  const { id } = useParams();
  const isLogged = useAppSelector(
    (state) => state.authorizationStatus === AuthorizationStatus.Auth
  );
  function fieldChangeHandler(
    evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = evt.target;
    setFormData({ ...formData, [name]: value });
  }

  function submitFormHandler(evt: React.FormEvent) {
    evt.preventDefault();
    if (!id) {
      return;
    }
    if (formData.review.length < 50 || formData.review.length > 300) {
      return;
    }
    if (Number(formData.rating) < 1) {
      return;
    }
    isPosted(true);
    dispatch(
      postReviewAction({
        offerId: id,
        comment: formData.review,
        rating: Number(formData.rating),
      })
    ).then(() => {
      setFormData({ rating: '', review: '' });
      isPosted(false);
    });
  }
  if (isLogged) {
    return (
      <form className="reviews__form form" onSubmit={submitFormHandler}>
        <label className="reviews__label form__label" htmlFor="review">
          Your review
        </label>
        <div className="reviews__rating-form form__rating">
          {stars.map((el) => (
            <Fragment key={el.id}>
              <input
                onChange={fieldChangeHandler}
                value={el.id.toString()}
                checked={formData.rating === el.id.toString()}
                className="form__rating-input visually-hidden"
                name="rating"
                id={`${el.id}-stars`}
                type="radio"
              />
              <label
                htmlFor={`${el.id}-stars`}
                className="reviews__rating-label form__rating-label"
                title={el.title}
              >
                <svg className="form__star-image" width={37} height={33}>
                  <use xlinkHref="#icon-star" />
                </svg>
              </label>
            </Fragment>
          ))}
        </div>
        <textarea
          onChange={fieldChangeHandler}
          value={formData.review}
          className="reviews__textarea form__textarea"
          id="review"
          name="review"
          placeholder="Tell how was your stay, what you like and what can be improved"
        />
        <div className="reviews__button-wrapper">
          <p className="reviews__help">
            To submit review please make sure to set{' '}
            <span className="reviews__star">rating</span> and describe your stay
            with at least <b className="reviews__text-amount">50 characters</b>.
          </p>
          <button
            className="reviews__submit form__submit button"
            type="submit"
            disabled={isPosting}
          >
            Submit
          </button>
        </div>
      </form>
    );
  }
}
export default CommentForm;
