import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { SettingsView } from './views/settings/SettingsView';
import { BridgesView } from './views/settings/BridgesView';

export const App: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/settings" component={SettingsView} />
      <Route exact path="/settings/bridges" component={BridgesView} />
      <Redirect to="/settings" />
    </Switch>
  );
};
