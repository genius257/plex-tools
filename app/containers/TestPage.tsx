import React from 'react';
import styles from './TestPage.css';

export default function TestPage(): JSX.Element {
  /*
    const db = Database('D:/Users/Frank/AppData/Local/Plex Media Server/Plug-in Support/Databases/com.plexapp.plugins.library.db', {readonly: true, fileMustExist: true, verbose: x => console.log(x)})
    let userId = 1;
    let rows = db.prepare('SELECT * FROM metadata_item_views WHERE account_id = ? ORDER BY viewed_at DESC LIMIT 3').all(userId);
    console.log(rows);
    //db.close();
    */
  return (
    <div data-tid="container" className={[styles.container].join(' ')}>
      <div className={styles.sidebar}>History Content (missing)</div>
      <div className={styles.page}>
        <div className={[styles.page, styles.header].join(' ')}>test</div>
        <div className={[styles.page, styles.content].join(' ')}>test</div>
      </div>
    </div>
  );
}
