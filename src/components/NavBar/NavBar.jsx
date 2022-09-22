import css from './Navbar.module.css';

import useAuth from 'hooks/useAuth';
import { NavBarMenu } from './NavBarMenu';
import { UserMenu } from './UserMenu';
import { NavBarAuth } from './NavBarAuth';

export const NavBar = () => {
  const isLogin = useAuth();
  return (
    <header className={css.header__containter}>
      {isLogin && <NavBarMenu />}
      {isLogin ? <UserMenu /> : <NavBarAuth />}
    </header>
  );
};
