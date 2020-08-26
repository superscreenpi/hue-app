import React, { ReactNode, useEffect, useState } from 'react';
import { useAppState } from '../../store';
import { Bridge } from '../../store/bridges';

export const BridgesView: React.FC = () => {
  useAppState((state) => state.bridges.bridges);
  const [detected, setDetected] = useState<Bridge[]>();

  useEffect(() => {
    fetch('https://discovery.meethue.com')
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          throw new Error(response.statusText);
        }
      })
      .then(setDetected);
  }, []);

  let content: ReactNode;

  if (detected === undefined) {
    content = (
      <div className="field">
        <i className="fas fa-pulse fa-spinner" />
      </div>
    );
  } else if (detected.length === 0) {
    content = (
      <div className="field">
        <label>
          <i className="fas fa-times" /> No Philips Hue bridges were detected on your network.
        </label>
      </div>
    );
  } else {
    // TODO: Display detected bridges and their status
  }

  return (
    <div className="container">
      <h2>Settings</h2>
      <div className="box">{content}</div>
    </div>
  );
};
