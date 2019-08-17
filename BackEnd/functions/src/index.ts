import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
admin.initializeApp();


// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript



export const getDatabase = functions.https.onRequest((req,res)=>{
	 const db = admin.firestore().doc('Song/I7hIjUkg5hTEtgePqEpI').get()
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






