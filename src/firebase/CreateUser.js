 import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "./Config";

 const CreateUser=async(props)=> {
    console.log(props);
    let err=''
         const { username, name,email, password1 ,error,loading } = props;
         console.log(username, name,email, password1,error,loading)
        
        err= await createUserWithEmailAndPassword(auth,email, password1)
              .then((usercredential) => {
                // Create the user 
                  console.log("Somethis is going on")
                 //firebase.firestore().collection("users")
                    //  .doc(firebase.auth().currentUser.uid)
                    //  .set(
                    //      {
                    //          profile_pic: "https://image.flaticon.com/icons/png/512/149/149071.png",
                    //          email: email,
                    //          username: username,
                    //          name: name,
                    //          bio: "",
                    //          website: "",
                    //      }
                    //  )
                 console.log(usercredential)
                 return "Account Created"

              })
          .catch((error) => {
             console.log(error.message)
             return error.message
           })
           return err;
        }



// const CreateUser=(data)=> {
//     console.log(firebase)
//     const { username, name,email, password1 } = data;
//     console.log(username, name,email, password1)
//     createUserWithEmailAndPassword(email, password1)
//         .then((usercredential) => {
//             console.log("Somethis is going on")
//             usercredential.user.sendEmailVerification();
//             console.log("Verify Your Email....")
//             firebase.firestore().collection("users")
//                 .doc(firebase.auth().currentUser.uid)
//                 .set(
//                     {
//                         profile_pic: "https://image.flaticon.com/icons/png/512/149/149071.png",
//                         email: email,
//                         username: username,
//                         name: name,
//                         bio: "",
//                         website: "",
//                     }
//                 )
//             console.log(usercredential)
            
//         })
//         .catch((error) => {
//             console.log(error.message)
            
//         })
export default CreateUser;