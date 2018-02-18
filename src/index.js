import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { UserIsAuthenticated } from './util/wrappers.js'

// Layouts
import App from './App'
import Home from './layouts/home/Home'
import Donator from './layouts/dashboard/Donator'
import Organization from './layouts/dashboard/Organization'
import NewOrg from './layouts/user/newOrg'
import New from './layouts/contract/New'
import Edit from './layouts/contract/Edit'
import Complete from './layouts/contract/Complete'
import Profile from './user/layouts/profile/Profile'


// Redux Store
import store from './store'

const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render((
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={App}>
          <IndexRoute component={Home} />
          <Route path="new" component={New} />
          <Route path="edit" component={Edit} />
          <Route path="complete" component={Complete} />
          <Route path="profile" component={UserIsAuthenticated(Profile)} />
          <Route path="donator" component={Donator} />
          <Route path="organization" component={Organization} />
          <Route path="new_org" component={NewOrg} />

        </Route>
      </Router>
    </Provider>
  ),
  document.getElementById('root')
)
