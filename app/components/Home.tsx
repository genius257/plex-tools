import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes.json';
import styles from './Home.css';

const fs = require('fs');
const Database = require('better-sqlite3');

export default function Home(): JSX.Element {
  return (
    <div className={styles.container} data-tid="container">
      <h2>Home</h2>
      <h2>Node: {process.versions.node}</h2>
      <button
        type="button"
        onClick={(e) =>
          console.log(fs.readFileSync('D:\\Desktop\\ytdl.txt').toString())
        }
      >
        XYZ
      </button>
      <Link to={routes.COUNTER}>to Counter</Link>
      <Link to={routes.TEST}>to Test</Link>
    </div>
  );
}
