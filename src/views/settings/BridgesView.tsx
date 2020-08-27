import React, { ReactNode, useEffect, useState } from 'react';
import { actions, useAppDispatch, useAppState } from '../../store';
import { Bridge } from '../../store/bridges';

export const BridgesView: React.FC = () => {
  const connected = useAppState((state) => state.bridges.bridges);
  const [detected, setDetected] = useState<Bridge[]>();
  const dispatch = useAppDispatch();

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
    content = (
      <>
        {detected.map(({ id, internalipaddress }) => (
          <div key={id} className="field">
            <label>
              <i className="fas fa-network-wired" /> {internalipaddress}
            </label>
            {connected.find((b) => b.id === id) ? (
              <i className="fas fa-check" />
            ) : (
              <button
                className="button"
                onClick={(): void => {
                  dispatch(
                    actions.registerBridge({
                      id,
                      internalipaddress,
                    }),
                  );
                }}
              >
                Connect
              </button>
            )}
          </div>
        ))}
      </>
    );
  }

  return (
    <div className="container">
      <h2>Settings</h2>
      <div className="box">{content}</div>
    </div>
  );
};
