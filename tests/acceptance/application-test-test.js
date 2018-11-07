import { module, test } from 'qunit';
import { visit, click, fillIn, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';
import window, {reset} from 'ember-window-mock';


module('Acceptance | application test', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);
  hooks.afterEach(function(){
  reset();
  });

  test('the inbox displays starred and unstarred emails', async function(assert) {
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
    starred: true,
    });
    server.create('email', {
    from: "from3",
    to: "to3",
    subject: "subject3",
    message: "message3",
    starred: false,
    });
    server.create('email', {
    from: "from4",
    to: "to4",
    subject: "subject4",
    message: "message4",
    starred: false,
    });

    server.create('email', {
    from: "from5",
    to: "to5",
    subject: "subject5",
    message: "message5",
    starred: false,
    });

    await visit('/');
    assert.dom('[data-test="email-starred"]').exists({count:2});
    assert.dom('[data-test="email-unstarred"]').exists({count:3});
  });

  test('verify that all of the email attributes were rendered', async function(assert) {
    server.create('email', {
      id: 0,
    from: "from1",
    to: "to1",
    subject: "subject1",
    message: "message1",
    starred: true,
    });
    await visit('/emails/0')


    assert.dom('[data-test="email-subject"]').hasText('subject1');
    assert.dom('[data-test="email-from"]').hasText('From: from1');
    assert.dom('[data-test="email-to"]').hasText('To: to1');
    assert.dom('[data-test="email-message"]').hasText('message1');
  });

  test('deleting a single email', async function(assert) {
    window.confirm = () => true;

    server.createList('email', 2);
    await visit('/emails/0');
    // await pauseTest();
  await click('[data-test="delete-email"');
  assert.equal(currentURL(), '/');
  // await pauseTest();
  assert.dom('[data-test="email-unstarred"').exists({count:1});
  });

  test('creating an email', async function(assert) {
    
    await visit('/compose');
    await fillIn('#from', 'from');
  await fillIn('#to', 'to');
  await fillIn('#subject', 'subject');
  await fillIn('#message', 'message');
  await click('[data-test="send"');
  assert.equal(currentURL(), '/');
  // await pauseTest();
  assert.dom('[data-test="email-unstarred"').exists({count:1});

  let email = server.db.emails[0];
  assert.equal(email.from, 'from');
  assert.equal(email.to, 'to');
  assert.equal(email.subject, 'subject');
  assert.equal(email.message, 'message');

  });
 
 



});
