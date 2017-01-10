import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunkMiddleware from 'redux-thunk';
import reducers from '../imports/client/modules';
import initialState from '../imports/client/initialState';
import App from '../imports/client/components/App';

const store = createStore(
  reducers,
  initialState,
  applyMiddleware(
    reduxThunkMiddleware,
  ),
);

const Root = (
  <Provider store={store}>
    <App />
  </Provider>
);

Meteor.startup(() => {
  render(Root, document.getElementById('miniTwitter'));
});
