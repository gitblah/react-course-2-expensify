import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  };

  firebase.initializeApp(config);
  
  const database = firebase.database();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


  export { firebase, googleAuthProvider, database as default};

//   // Child removed
//   database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
//   });

//   // Child changed
//   database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
//   });

//   // Child added
//   database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
//   });
    

//   database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {        

//         const expenses = [];

//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             })
//         })

//         console.log(expenses);
//     });

// database.ref('expenses')
//     .on('value', (snapshot) => {        

//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         })
//     })

//     console.log(expenses);
// });

//   database.ref('expenses').push({
//       description: 'rent2',
//       note: '',
//       amount: 10000,
//       createdAt: 67676768777
//   });

//   database.ref('notes').push({
//     title: 'course topics',
//     body: 'react native'
// });

//   const notes = [{
//       id: '12',
//       title: 'FIrst note',
//       body: 'This is my note'
//   },
//   {
//     id: '43326',
//     title: 'second note',
//     body: 'This is my note'
// }];

// database.ref('notes').set(notes);

//   database.ref().on('value', (snapshot) => {
//       const val = snapshot.val();
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
//   });

//   setTimeout(()=> {
//     database.ref('age').set(29);
//   }, 3500);

//   setTimeout(()=> {
//     database.ref().off(onValueChange);
//   }, 7000);

//   setTimeout(()=> {
//     database.ref('age').set(30);
//   }, 10500);


//   database.ref('location')
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     }).catch((e) => {
//         console.log('Error fetching data', e)
//     });


//   database.ref().set({
//     name: 'JJJ',
//     age: 32,
//     stressLevel: 6,
//     job: {
//         title: 'software developer',
//         company: 'Google'
//     },
//     location: {
//         city: 'perth',
//         country: 'Aust'
//     }    
//   }).then(() => {
//     console.log('first set call worked')
//   }).catch((e) => {
//     console.log('first error', e)
//   });

//   database.ref().update({   
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'seatle'    
//   });

//   database.ref('isSingle').set(null);

// database.ref()
//     .remove()
//     .then(() => {
//         console.log('data was removed')
//     }).catch((e) => {
//         console.log('did not remove data', e)
//     });