/**
 * @jsx React.DOM
 */
'use strict';

var Routing = require('./Routing');

class PathnameRouting extends Routing {

  getPath() {
    return window.location.pathname;
  }

  getQuery() {
    return window.location.search.substr(1);
  }

  pushPath(path) {
    window.history.pushState({}, '', path);
  }

  replacePath(path) {
    window.history.replaceState({}, '', path);
  }

  doStart() {
    window.addEventListener('popstate', this.onBackButton);
  }

  doStop() {
    window.removeEventListener('popstate', this.onBackButton);
  }
}

module.exports = PathnameRouting;
