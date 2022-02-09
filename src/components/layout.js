import React, { useEffect } from 'react';
import { Link } from 'gatsby';
import {
  container,
  navLinks,
  navLinkItem,
  navLinkText,
  mainAndSidebar,
  main,
} from './layout.module.css';

const Layout = ({ pageTitle, sidebar, children }) => {
  useEffect(() => {
    document.getElementsByTagName('html')[0].style.overflow = 'hidden';
  }, []);
  return (
    <div className={container}>
      <title>{pageTitle}</title>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to='/' className={navLinkText}>
              Home
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to='/basic/be-present-simple-1' className={navLinkText}>
              Basic
            </Link>
          </li>
        </ul>
      </nav>
      <div className={mainAndSidebar}>
        <main className={main}>{children}</main>
        {sidebar}
      </div>
    </div>
  );
};
export default Layout;
