import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | listOfArticles', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:list-of-articles');
    assert.ok(route);
  });
});
