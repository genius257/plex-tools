import React from 'react';
import Plex from '../utils/plex';
// import styles from './TestPage.css';

const fs = require('fs');

export default function ErrorPage() {
  const logDir = `${Plex.dataDirectoryPath}/Logs`;

  const logRegex = /^Plex Media Server(\.[0-9]+)?\.log$/;
  const logs: Array<string> = fs
    .readdirSync(logDir)
    .filter((file: string) => logRegex.test(file))
    .sort((file1: string, file2: string) =>
      fs.statSync(`${logDir}/${file1}`).mtime >
      fs.statSync(`${logDir}/${file2}`).mtime
        ? -1
        : 1
    );

  return (
    <>
      <div
        style={{
          display: 'flex',
          gap: '50px',
          flexDirection: 'row',
          backgroundColor: '#222',
          overflowX: 'scroll',
        }}
      >
        {logs.map((log: string) => (
          <div
            key={log}
            style={{
              backgroundColor: '#333',
              padding: '0 10px',
              borderRight: '1px solid #222',
              minWidth: '100px',
              height: '40px',
              flexShrink: 0,
              lineHeight: '40px',
              cursor: 'pointer',
            }}
            onClick={}
          >
            {log}
          </div>
        ))}
      </div>
      this page will read the plex log(s) and group entries togehter, show
      graphs, and allow filtering of centent. For example between info, error,
      and warning types.
    </>
  );
}
