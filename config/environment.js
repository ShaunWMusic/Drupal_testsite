'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'drupal-ui',
    environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      host: 'http://drupal.test/api',  // @todo - Fill in your Drupal backend URL
      oauth2TokenEndpoint: '/oauth/token',
      oauth2ClientId: '0a7f8d94-b4f1-4579-98ff-1cd15ef63794',  // @todo - Fill in your client UUID

      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  // Map Drupal Entities to Ember models with simplified one-part names
  ENV.drupalEntityModels = {
    // @todo - map any additional Drupal entities you want to use
    "article": {},  // Map 'article' Ember data model to Drupal/JSON API type 'node--article'
    "user": { entity: 'user', bundle: 'user' },  // Map 'user' model to 'user--user'
    "file": { entity: 'file', bundle: 'file' },  // Map 'file' model to 'file--file'
    "tag": { entity: 'taxonomy_term', bundle: 'tags' }  // Map 'tag' model to 'taxonomy-term--tags'
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
  }

  return ENV;
};
