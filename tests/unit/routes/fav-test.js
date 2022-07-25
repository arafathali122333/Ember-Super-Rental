import { module, test } from 'qunit';
import { setupTest } from 'super-rental/tests/helpers';

module('Unit | Route | fav', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:fav');
    assert.ok(route);
  });
});
