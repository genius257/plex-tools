import React from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';
import styles from './TestPage.css';
import plex from '../utils/plex';
import routes from '../constants/routes.json';
import HomePage from './content/HomePage';
import SharePage from './content/SharePage';
import MissingPage from './content/MissingPage';

export default function ContentPage() {
  return (
    <div data-tid="container" className={[styles.container].join(' ')}>
      <div className={styles.sidebar}>
        <div className={styles.sidebarLink}>
          <NavLink
            className={styles.sourceLink}
            exact
            activeClassName={styles.active}
            to={routes.CONTENT_HOME}
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
            to={routes.CONTENT_SHARE}
          >
            <div className={styles.iconContainer}>
              <i className="fa fa-share-alt" />
            </div>
            <div>Share</div>
          </NavLink>
        </div>
        <div className={styles.sidebarLink}>
          <NavLink
            className={styles.sourceLink}
            activeClassName={styles.active}
            to={routes.CONTENT_MISSING}
          >
            <div className={styles.iconContainer}>
              <i className="fa fa-question" />
            </div>
            <div>Missing</div>
          </NavLink>
        </div>
      </div>
      <div className={styles.page}>
        <Switch>
          <Route path={routes.CONTENT_SHARE} component={SharePage} />
          <Route path={routes.CONTENT_MISSING} component={MissingPage} />
          <Route path={routes.CONTENT_HOME} component={HomePage} />
        </Switch>
      </div>
    </div>
  );
}
