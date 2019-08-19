
import * as functions from 'firbase-functions';
import * as admin from 'firbase-admin';



//Handle the login from the user and export a JSON file and adding it to the database

let user = firesbase.auth().currentUser;

if(user != null)
{
  user.providerData.forEach((profile)=>{
  
  })
}



