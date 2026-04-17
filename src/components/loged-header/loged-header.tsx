import { logoutAction } from '../../store/api-actions';
import { useNavigate, Link } from 'react-router-dom';
import { AppRoute } from '../../constants/constants';
import { useAppDispatch } from '../../hooks';
import logo from '/img/logo.svg';
export function LoggedHeader() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  function handleOut() {
    dispatch(logoutAction());
    navigate(AppRoute.Root);
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className="header__logo-link" to={AppRoute.Root}>
              <img
                className="header__logo"
                src={logo}
                alt="6 cities logo"
                width={81}
                height={41}
              />
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <a
                  className="header__nav-link header__nav-link--profile"
                  href="#"
                >
                  <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                  <span className="header__user-name user__name">
                    Oliver.conner@gmail.com
                  </span>
                  <span className="header__favorite-count">0</span>
                </a>
              </li>
              <li className="header__nav-item">
                <a className="header__nav-link" href="#">
                  <span className="header__signout" onClick={handleOut}>
                    Sign out
                  </span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
