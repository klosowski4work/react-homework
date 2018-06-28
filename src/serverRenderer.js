import React from 'react';
import { renderToString, renderToStaticMarkup } from 'react-dom/server';
import { StaticRouter as Router } from 'react-router-dom';
// import configureStore from './containers/configureStore';
import App from './containers/App';
import store from './store';
import Html from './containers/Html';
import './index.scss';
import { searchBy, search } from '../src/containers/SearchMovie/actions';
import { sortBy } from '../src/components/SortBy/actions';

export default function serverRenderer() {
  return async (req, res) => {
    const context = {};
    const scripts = ['bundle.js'];

    if (req.url.match(/\/search\//)) {
      const queryParams = req.url.replace('/search/', '');
      const parsedQuery = qs.parse(queryParams);
      store.dispatch(searchBy(parsedQuery.searchBy));
      store.dispatch(search(parsedQuery.sortBy));
      await store.dispatch(loadData(queryParams));
    }

    const appMarkup = renderToString(<App context={context} location={req.url} Router={Router} store={store} />);
    const html = renderToStaticMarkup(
      <Html children={appMarkup}
        scripts={scripts}
        preloadedState={store.getState()} />
    );

    if (context.url) {
      res.writeHead(302, {
        Location: context.url,
      });
      res.end();
      return;
    }

    res.send(`<!doctype html>${html}`);
  };
}
