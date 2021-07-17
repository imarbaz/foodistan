import * as functions from 'firebase-functions';

exports.onUserCreated = functions.firestore
.document('users/{userId}')
.onCreate((usersSnapshot, context) =>{
    console.log(
        'UserCreated | send an email to ${data.email}'
        );
});
