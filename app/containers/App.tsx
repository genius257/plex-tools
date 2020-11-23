import React, { ReactNode } from 'react';
import styles from './TestPage.css';
import plex from "../utils/plex";
import { Link, NavLink, Switch, Route } from 'react-router-dom';
import routes from '../constants/routes.json';

type Props = {
  children: ReactNode;
};

const Database = require('better-sqlite3');

plex.dataDirectoryPath = 'D:/Users/Frank/AppData/Local/Plex Media Server/';
plex.db = Database('D:/Users/Frank/AppData/Local/Plex Media Server/Plug-in Support/Databases/com.plexapp.plugins.library.db', {readonly: true, fileMustExist: true, verbose: x => console.log(x)})

export default function App(props: Props) {
  const { children } = props;
  //return <>{children}</>;
  return (
    <div data-tid="container" className={[styles.container].join(' ')}>
      <div className={styles.sidebar}>
        <div className={styles.sidebarLink}>
          <NavLink className={styles.sourceLink} exact activeClassName={styles.active} to={routes.HOME}>
            <div className={styles.iconContainer}><i className="fa fa-home" /></div>
            <div>Home</div>
          </NavLink>
        </div>
        <div className={styles.sidebarLink}>
          <NavLink className={styles.sourceLink} activeClassName={styles.active} to={routes.HISTORY}>
            <div className={styles.iconContainer}><i className="fa fa-history" /></div>
            <div>History</div>
          </NavLink>
        </div>
        <div className={styles.sidebarLink}>
          <NavLink className={styles.sourceLink} activeClassName={styles.active} to={routes.CONTENT}>
            <div className={styles.iconContainer}><i className="fa fa-info" /></div>
            <div>Content</div>
          </NavLink>
        </div>
        <div className={styles.sidebarLink}>
          <NavLink className={styles.sourceLink} activeClassName={styles.active} to={routes.ERRORS}>
            <div className={styles.iconContainer}><i className="fa fa-exclamation-triangle" /></div>
            <div>Errors</div>
          </NavLink>
        </div>
      </div>
      <div className={styles.page}>
        {children}
      </div>
    </div>
  );
}
