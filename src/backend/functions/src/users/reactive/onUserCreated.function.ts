import * as functions from 'firebase-functions';

exports.onUserCreated = functions.firestore
.document('users/{userId}')
.onCreate((usersSnapshot, context) => {
    const data = usersSnapshot.data();
    console.log(
        `User created | send an email to ${data.email}`
        );
});

