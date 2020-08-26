import React from 'react';
import { Link } from 'react-router-dom';

export const SettingsView: React.FC = () => (
  <div className="container">
    <h2>Settings</h2>
    <div className="box">
      <Link to="/settings/bridges" className="clickable field">
        <label>
          <i className="fas fa-network-wired" /> Bridges
        </label>
      </Link>
    </div>
  </div>
);
