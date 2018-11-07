import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Helper | truncate-text', function(hooks) {
  setupRenderingTest(hooks);

  // Replace this with your real tests.
  test('not shortening short string', async function(assert) {
    this.set('inputValue1', '1234');

    await render(hbs`{{truncate-text inputValue1 5}}`);

    assert.equal(this.element.textContent.trim(), '1234');
  });

   test('shortening long string', async function(assert) {
    this.set('inputValue1', '123456');


    await render(hbs`{{truncate-text inputValue1 5}}`);

    assert.equal(this.element.textContent.trim(), '12345...');
  });
});
