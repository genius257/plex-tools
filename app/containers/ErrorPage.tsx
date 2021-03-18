import React, { useState } from 'react';
import Plex from '../utils/plex';
// import styles from './TestPage.css';

const fs = require('fs');

interface IAccumulator {
  [severity: string]: ISeverity;
}

interface ISeverity extends Array<ILineObject> {
  distinct?: Array<ILineObject>;
}

interface ILineObject {
  dateTime: string;
  threadId: string;
  severity: string;
  message: string;
  lineNumber: number;
}

function generateLogOverview(file: string) {
  return fs
    .readFileSync(file, 'ascii')
    .split(/\n/g)
    .reduce((accumulator: IAccumulator, line: string, index: number) => {
      const lineInfo = line.match(
        /([a-z0-9,.: ]+) \[([0-9]+)\] ([a-z]+) - (.*)/i
      );
      if (lineInfo !== null) {
        const lineObject: ILineObject = {
          dateTime: lineInfo[1],
          threadId: lineInfo[2],
          severity: lineInfo[3],
          message: lineInfo[4],
          lineNumber: index + 1,
        };
        const severity = lineInfo[3];
        if (!Array.isArray(accumulator[severity])) {
          accumulator[severity] = [];
          accumulator[severity].distinct = [];
        }
        accumulator[severity].push(lineObject);
        if (
          accumulator[severity].distinct.findIndex(
            (lineObject2: { message: string }) =>
              lineObject2.message === lineObject.message
          ) === -1
        ) {
          accumulator[severity].distinct.push(lineObject);
        }
      }
      return accumulator;
    }, {});
}

export default function ErrorPage() {
  const [selectedLog, setSelectedLog] = useState(null);
  const [logData, setLogData] = useState(null);

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
              backgroundColor: selectedLog === log ? '#555' : '#333',
              padding: '0 10px',
              borderRight: '1px solid #222',
              minWidth: '100px',
              height: '40px',
              flexShrink: 0,
              lineHeight: '40px',
              cursor: 'pointer',
            }}
            onClick={() => {
              if (log === selectedLog) {
                setSelectedLog(null);
                setLogData(null);
                return;
              }
              setLogData(generateLogOverview(`${logDir}/${log}`));
              setSelectedLog(log);
            }}
            onKeyPress={(event) =>
              event.key === 'Enter' ? event.currentTarget.click() : null
            }
            role="radio"
            aria-checked={selectedLog === log}
            tabIndex={0}
          >
            {log}
          </div>
        ))}
      </div>
      {selectedLog !== null ? (
        <>
          {`${logDir}/${selectedLog}`}
          <div style={{ overflowY: 'scroll', height: '100%' }}>
            {Object.keys(logData).map((severity) => (
              <>
                <div key={severity}>
                  {severity}: {logData[severity].length} (
                  {logData[severity].distinct.length} distinct)
                </div>
                <div>
                  {logData[severity].map((logLineObject: ILineObject) => (
                    <div
                      style={{ paddingLeft: '50px' }}
                      key={logLineObject.lineNumber}
                    >
                      {logLineObject.message}
                    </div>
                  ))}
                </div>
              </>
            ))}
          </div>
        </>
      ) : (
        <>No logfile selected.</>
      )}
    </>
  );
}
