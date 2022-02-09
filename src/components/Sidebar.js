import React, { useState } from 'react';
import {
  sidebar,
  toggleButton,
  show,
  hide,
  bar1,
  change1,
  bar2,
  change2,
  bar3,
  change3,
  linkCss,
} from './Sidebar.module.css';
import { Fragment } from 'react';
import { Link } from 'gatsby';
import slugify from '../utils/slugify';

const Sidebar = ({ linkList }) => {
  // toggle status is used to check if sidebar show or hide in small screen
  const [toggleStatus, setToggleStatus] = useState(false);

  const toggle = () => {
    setToggleStatus(!toggleStatus);
  };

  return (
    <Fragment>
      <div
        className={toggleStatus ? sidebar + ' ' + show : sidebar + ' ' + hide}
      >
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {linkList.map((item, index) => (
            <li key={index}>
              <Link
                onClick={toggle}
                to={slugify(item.id, item.directory)}
                className={linkCss}
                activeStyle={{ fontWeight: 800 }}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div onClick={toggle} className={toggleButton}>
        <div className={!toggleStatus ? bar1 : bar1 + ' ' + change1}></div>
        <div className={!toggleStatus ? bar2 : bar2 + ' ' + change2}></div>
        <div className={!toggleStatus ? bar3 : bar3 + ' ' + change3}></div>
      </div>
    </Fragment>
  );
};

export default Sidebar;
