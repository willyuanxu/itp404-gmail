import { module, test } from 'qunit';
import { visit, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';




module('Acceptance | star-button', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);
 


  test('visiting / posts have star button', async function(assert) {
    server.create('email', {
    from: "from1",
    to: "to1",
    subject: "subject1",
    message: "message1",
    starred: true,
    });
    server.create('email', {
    from: "from2",
    to: "to2",
    subject: "subject2",
    message: "message2",
    starred: false,
    });
    await visit('/');
    // await pauseTest();
    assert.dom('[data-test="star-button"]').exists({count:2});
  });


   test('the star is filled when starred is true', async function(assert) {
    server.createList('email', 1);
    await visit('/');
    // await pauseTest();
    assert.dom('[data-test="email-unstarred"]').exists({count:1});
    await click('[data-test="star-button"]');
    assert.dom('[data-test="email-starred"]').exists({count:1});
  assert.dom('[data-test="star-button"]').hasClass('checked');

  });

   test('the star is empty when starred is false', async function(assert) {
    server.create('email', {
    from: "from1",
    to: "to1",
    subject: "subject1",
    message: "message1",
    starred: true,
    });
    await visit('/');
    // await pauseTest();
    assert.dom('[data-test="email-starred"]').exists({count:1});
    await click('[data-test="star-button"]');
    assert.dom('[data-test="email-unstarred"]').exists({count:1});
    assert.dom('[data-test="star-button"]').doesNotHaveClass('checked');
  });




});
