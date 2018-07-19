'use strict';

const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();

const EXPIRE_TIME = 100 * 1000; // 100 seconds

exports.deleteExpiredMessages = functions.database.ref('/messages/{pushId}').onWrite((change) => {
  const ref = change.after.ref.parent;
  const now = Date.now();
  const expired = now - EXPIRE_TIME;
  const oldItemsQuery = ref.orderByChild('timestamp').endAt(expired);
  return oldItemsQuery.once('value').then((snapshot) => {
    const updates = {};

    snapshot.forEach(child => {
      updates[child.key] = null;
    });

    return ref.update(updates);
  });
});
