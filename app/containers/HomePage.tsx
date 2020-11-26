import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './TestPage.css';
import routes from '../constants/routes.json';

export default function HomePage() {
  // return <Home />;
  return (
    <>
      <div className={[styles.page, styles.header].join(' ')}>header</div>
      <div className={[styles.page, styles.content].join(' ')}>content</div>
    </>
  );
  return (
    <div data-tid="container" className={[styles.container].join(' ')}>
      <div className={styles.sidebar}>
        <div className={styles.sidebarLink}>
          <NavLink
            className={styles.sourceLink}
            exact
            activeClassName={styles.active}
            to={routes.HOME}
          >
            <div className={styles.iconContainer}>
              <i className="fa fa-home" />
            </div>
            <div>Home</div>
          </NavLink>
        </div>
        <div className={styles.sidebarLink}>
          <NavLink
            className={styles.sourceLink}
            activeClassName={styles.active}
            to={routes.HISTORY}
          >
            <div className={styles.iconContainer}>
              <i className="fa fa-history" />
            </div>
            <div>History</div>
          </NavLink>
        </div>
        <div className={styles.sidebarLink}>
          <NavLink
            className={styles.sourceLink}
            activeClassName={styles.active}
            to={routes.CONTENT}
          >
            <div className={styles.iconContainer}>
              <i className="fa fa-info" />
            </div>
            <div>Content</div>
          </NavLink>
        </div>
      </div>
      <div className={styles.page}>
        <div className={[styles.page, styles.header].join(' ')}>test</div>
        <div className={[styles.page, styles.content].join(' ')}>test</div>
      </div>
    </div>
  );
}
