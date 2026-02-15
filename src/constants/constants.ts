export enum Cities {
  Paris = 'Paris',
  Cologne = 'Cologne',
  Brussels = 'Brussels',
  Amsterdam = 'Amsterdam',
  Hamburg = 'Hamburg',
  Dusseldorf = 'Dusseldorf',
}

export const cityMap = {
  Paris: {
    cityName: 'Paris',
    lat: 48.85661,
    lng: 2.351499,
  },
};
export const citiesList: CitiesListProps[] = [
  {
    id: 1,
    city: 'Paris',
  },
  {
    id: 2,
    city: 'Cologne',
  },
  {
    id: 3,
    city: 'Brussels',
  },
  {
    id: 4,
    city: 'Amsterdam',
  },
  {
    id: 5,
    city: 'Hamburg',
  },
  {
    id: 6,
    city: 'Dusseldorf',
  },
];

export const sortOptions: sortOptionsProps[] = [
  {
    id: 1,
    option: 'Popular',
  },
  {
    id: 2,
    option: 'Price: low to high',
  },
  {
    id: 3,
    option: 'Price: high to low',
  },
  {
    id: 4,
    option: 'Top rated first',
  },
];

export type sortOptionsProps = {
  id: number;
  option: string;
};

export type CitiesListProps = {
  id: number;
  city: string;
};

export enum AppRoute {
  Root = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const URL_MARKER_DEFAULT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

export const URL_MARKER_CURRENT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';

export enum APIRoute {
  Offers = '/offers',
  Login = '/login',
  Logout = '/logout',
}
export const TIMEOUT_SHOW_ERROR = 2000;

export enum NameSpace {
  Offers = 'OFFERS',
  CurrentOffer = 'CURRENTOFFER',
  Reviews = 'REVIEWS',
  NearbyOffers = 'NEARBYOFFERS',
  PostReview = 'POSTREVIEW',
  Login = 'LOGIN',
}
