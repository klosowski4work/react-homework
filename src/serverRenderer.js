import React from 'react';
import { renderToString, renderToStaticMarkup } from 'react-dom/server';
import { StaticRouter as Router } from 'react-router-dom';
// import configureStore from './containers/configureStore';
import App from './containers/App';
import store from './store';
import Html from './containers/Html';
import './index.scss';

export default function serverRenderer() {
  return (req, res) => {
    const context = {};
    const scripts = ['bundle.js'];
    const preloadedState = store.getState();

    const appMarkup = renderToString(<App context={context} location={req.url} Router={Router} store={store} />);
    const html = renderToStaticMarkup(
      <Html children={appMarkup}
        scripts={scripts}
        preloadedState={preloadedState} />
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
