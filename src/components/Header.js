import { useSelector, useDispatch } from "react-redux";

import classes from "./Header.module.css";

import { authActions, counterActions } from "../store/index";

const Header = () => {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(authActions.logout());
  };

  const resetHandler = (event) => {
    event.preventDefault();
    dispatch(counterActions.reset());
  };

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isAuth && (
        <nav>
          <ul>
            <li>
              <a onClick={resetHandler} href="/">ResetCounter</a>
            </li>
            <li>
              <a href="/">Switch User</a>
            </li>
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
