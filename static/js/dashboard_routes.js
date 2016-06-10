// @flow
/* global SETTINGS: false */
import React from 'react';
import { Route, Router, IndexRedirect } from 'react-router';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import App from './containers/App';
import DashboardPage from './containers/DashboardPage';
import SettingsPage from './containers/SettingsPage';
import ProfilePage from './containers/ProfilePage';
import PersonalTab from './components/PersonalTab';
import EmploymentTab from './components/EmploymentTab';
import PrivacyTab from './components/PrivacyTab';
import EducationTab from './components/EducationTab';
import TermsOfServicePage from './containers/TermsOfServicePage';
import UserPage from './containers/UserPage';
import User from './components/User';

/**
 * Create the dashboard routes (the root React elements to be rendered into our container)
 *
 * @param browserHistory A browserHistory object
 * @param store The redux store to be used
 * @param onRouteUpdate {function} Function called when the route changes
 * @returns {ReactElement}
 */
export function makeDashboardRoutes(browserHistory: Object, store: Object, onRouteUpdate: Function) {
  return <div>
    <MuiThemeProvider muiTheme={getMuiTheme()}>
      <Provider store={store}>
        <Router history={browserHistory} onUpdate={onRouteUpdate}>
          <Route path="/" component={App}>
            <Route path="dashboard" component={DashboardPage} />
            <Route path="profile" component={ProfilePage}>
              <IndexRedirect to="personal" />
              <Route path="personal" component={PersonalTab} />
              <Route path="education" component={EducationTab}/>
              <Route path="professional" component={EmploymentTab} />
              <Route path="privacy" component={PrivacyTab} />
            </Route>
            <Route path="/terms_of_service" component={TermsOfServicePage} />
            <Route path="/settings" component={SettingsPage}  />
            <Route path="/users" component={UserPage} >
              <IndexRedirect to={`${SETTINGS.username}`} />
              <Route path=":username" component={User} />
            </Route>
          </Route>
        </Router>
      </Provider>
    </MuiThemeProvider>
  </div>;
}
