import { useAppDispatch } from '../../hooks';
import { loadCity } from '../../store/offers/offers';
type CityListProp = {
  city: string;
};

function CityItem({ city }: CityListProp) {
  const dispatch = useAppDispatch();
  return (
    <li
      className="locations__item"
      onClick={() => {
        dispatch(loadCity(city));
      }}
    >
      <a className="locations__item-link tabs__item" href="#">
        <span>{city}</span>
      </a>
    </li>
  );
}
export default CityItem;
