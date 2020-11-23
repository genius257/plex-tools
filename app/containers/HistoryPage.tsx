import React from 'react';
import styles from './TestPage.css';
import plex from "../utils/plex";

const crypto = require('crypto');

export default function HistoryPage() {
    let userId = 1;
    let rows = plex.db.prepare('SELECT * FROM metadata_item_views WHERE account_id = ? ORDER BY viewed_at DESC LIMIT 5').all(userId);
    //console.log(rows);

    return (
        <>
            <div className={[styles.page, styles.header].join(' ')}>
                header
            </div>
            <div className={[styles.page, styles.content].join(' ')}>
                {rows.map(row => {
                let guid = row.grandparent_guid || row.guid;
                let hash = crypto.createHash('sha1');
                hash.update(guid);
                hash = hash.digest('hex');
                //let basePath = 'D:/Users/Frank/AppData/Local/Plex Media Server';
                //let url = row.thumb_url;
                ////url.replace('metadata://', basePath + '/MetaData/TV Shows');
                //url =  basePath + '/MetaData/TV Shows/';
                //url += hash[0] + '/';
                //url += hash.substr(1) + '.bundle/Contents/_combined/';
                //url += row.thumb_url.replace('metadata://', '');
                //console.log(url);


                return <div key={row.id} style={{marginBottom: "10px"}}>
                    {row.grandparent_title}
                    <br/>
                    {row.title}
                    <br/>
                    {row.viewed_at}
                    <br/>
                    {row.thumb_url}
                    <br/>
                    {row.guid}
                    <br/>
                    {row.grandparent_guid}
                    <br/>
                    {plex.db.prepare('SELECT * FROM accounts WHERE id = ? LIMIT 1').get(row.account_id).name}
                    <br/>
                    {plex.db.prepare('SELECT * FROM devices WHERE id = ? LIMIT 1').get(row.device_id).name}
                    <br/>
                    <img width="330" src={plex.ConvertURI(row.thumb_url, hash)} />
                </div>})}
            </div>
        </>
    );
}
