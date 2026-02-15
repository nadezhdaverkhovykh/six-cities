import { useAppDispatch } from '../../hooks';
import { sortOffers } from '../../store/offers/offers';
type SortItemProp = {
  option: string;
};

export function SortItem({ option }: SortItemProp) {
  const dispatch = useAppDispatch();
  return (
    <li
      className="places__option places__option--active"
      tabIndex={0}
      onClick={() => {
        dispatch(sortOffers(option));
      }}
    >
      {option}
    </li>
  );
}
