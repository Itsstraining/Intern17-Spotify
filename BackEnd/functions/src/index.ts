import * as functions from 'firebase-functions'; //for using firebase function 
import * as admin from 'firebase-admin'; //
import * as firebaseHelper from 'firebase-functions-helper';
import * as express from 'express'; 
admin.initializeApp();

const db = admin.firestore();
const app = express();
const main= express();



const usersRef = firestore.collection('Users');
// database variables
const defaultDatabase = admin.database();

export const searchForSongName = functions.https.onRequest((req,res)=>{
   usersRef.get()
   .then()
})


// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript



//Add user information into the database after they login
export const addUserAuthIntoDatabase = functions.https.onRequest((req,res)=>{
  admmin.firestore.collection("user").add({})
  .then()
})

//FUNCTION TO RETRIVE DOWLOAD LINK FROM STORAGE 
export const getDownloadLink = functions.https.



export const getUserInformation = functions.https.onRequest((req,res) =>{
  admin.firestore().doc("user/").get()
  .then(userSnapshot) =>{
    
  }
});




export const getDatabase = functions.https.onRequest((req,res)=>{
	 const db = admin.firestore().doc('Song/{SongID}').get()
	 const p2 = db.then(snapshot =>{
	 	const data = snapshot.data()
	 	res.send(data);
	 })
	 p2.catch(error =>{
	 	//handle the error
	 	console.log(error);
	 	res.status(500).send(error);
	 })
})
//Read and retrive information 




export const helloWorld = functions.https.onRequest((request, response) => {
	response.send("Hello from Firebase! it is a serverless");
});

//A function that respone to handle the file from the firestore


// export const getPlayListFromTheUser = functions.https.onRequest((req,res)=>{
// 	admin.firestore().doc("user/song/${playlist}").get()
// 	.then(snapshot =>{
// 		const data = snapshot.data()
// 		res.send(data)
// 	})
// 	.catch(error => {
// 		//handle the erro
// 		console.log(error);
// 		res.status(500).send(error)
// 	})
// })



// export const addMessage = functions.https.onRequest((req,res) => {
// 	const text = req.query.text;
// 	admin
// 		.database()
// 		.ref('/message')
// 		.push({text: "Khuong is amazing"})
// 		.then(() =>{
// 			res.json({
// 				message: 'greart',
// 				text
// 			})
// 		})
// 		.catch(()=>{
// 			res.json({
// 				message:'not great :(('
// 			})
// 		})
// });






