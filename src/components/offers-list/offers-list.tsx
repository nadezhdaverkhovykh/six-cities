import OfferCard from '../offer-card/offer-card';
// import { useAppSelector } from '../../hooks';
import { OffersProps } from '../../types/offers';
type ListItemHoverProps = {
  onListItemHover: (OfferId: string) => void;
  offers: OffersProps[];
};

function OffersList({ onListItemHover, offers }: ListItemHoverProps) {
  // const chosenCity = useAppSelector((state) => state.city);
  // const allOffers = useAppSelector((state) => state.offers);
  // const chosenOffers = allOffers
  //   .filter((el) => el.city.name === chosenCity)
  //   .slice();
  // const sortType = useAppSelector((state) => state.sortType);
  // switch (sortType) {
  //   case 'Price: low to high':
  //     chosenOffers.sort((a, b) => a.price - b.price);
  //     break;
  //   case 'Price: high to low':
  //     chosenOffers.sort((a, b) => b.price - a.price);
  //     break;
  //   case 'Top rated first':
  //     chosenOffers.sort((a, b) => b.rating - a.rating);
  //     break;
  // }
  return (
    <>
      {offers.map((el) => (
        <OfferCard key={el.id} offer={el} onOfferEnter={onListItemHover} />
      ))}
    </>
  );
}
export default OffersList;

// function OffersList({ onListItemHover }: ListItemHoverProps) {
//   const chosenCity = useAppSelector((state) => state.city);
//   const allOffers = useAppSelector((state) => state.offers);
//   const chosenOffers = allOffers
//     .filter((el) => el.city.name === chosenCity)
//     .slice();
//   const sortType = useAppSelector((state) => state.sortType);
//   switch (sortType) {
//     case 'Price: low to high':
//       chosenOffers.sort((a, b) => a.price - b.price);
//       break;
//     case 'Price: high to low':
//       chosenOffers.sort((a, b) => b.price - a.price);
//       break;
//     case 'Top rated first':
//       chosenOffers.sort((a, b) => b.rating - a.rating);
//       break;
//   }
//   return (
//     <>
//       {chosenOffers.map((el) => (
//         <OfferCard key={el.id} offer={el} onOfferEnter={onListItemHover} />
//       ))}
//     </>
//   );
// }
// export default OffersList;
