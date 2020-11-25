import React from 'react';
import { Link, NavLink, Switch, Route } from 'react-router-dom';
import styles from './TestPage.css';
import plex from '../utils/plex';
import Home from '../components/Home';
import routes from '../constants/routes.json';

const Database = require('better-sqlite3');

plex.db = Database(
  'D:/Users/Frank/AppData/Local/Plex Media Server/Plug-in Support/Databases/com.plexapp.plugins.library.db',
  { readonly: true, fileMustExist: true, verbose: (x: any) => console.log(x) }
);

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
