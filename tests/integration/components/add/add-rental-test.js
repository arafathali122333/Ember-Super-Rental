import { module, test } from 'qunit';
import { setupRenderingTest } from 'super-rental/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | add/add-rental', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Add::AddRental />`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      <Add::AddRental>
        template block text
      </Add::AddRental>
    `);

    assert.dom(this.element).hasText('template block text');
  });
});
