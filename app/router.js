import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('article', {
    path: '/article/:id'
  });

  this.route('tag', {
    path: '/tag/:id'
  });

  this.route('file', {
    path: '/file/:id'
  });

  this.route('login', {
    path: '/login'
  });
  
  this.route('listOfArticles');
});

export default Router;
