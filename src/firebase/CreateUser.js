import firebase from "firebase"
require('firebase/firestore')

 const CreateUser=(props)=> {
    console.log(props);
    let err=''
         const { username, name,email, password1 ,error,loading } = props;
         console.log(username, name,email, password1,error,loading)
        
        err= firebase.auth().createUserWithEmailAndPassword(email, password1)
              .then((usercredential) => {
                // Create the user 
                console.log(firebase.auth().currentUser.uid);
                console.log("Somethis is going on - ")
                 firebase.firestore().collection("users")
                      .doc(firebase.auth().currentUser.uid)
                      .set(
                          {
                              uid:firebase.auth().currentUser.uid,
                              profile_pic: "https://image.flaticon.com/icons/png/512/149/149071.png",
                              email: email,
                              username: username,
                              name: name,
                              bio: "",
                              website: "",
                          }
                      )
                 console.log(usercredential)
                 return "Account Created"

              })
          .catch((error) => {
             console.log(error.message)
             return error.message
           }) 
           return err;
        }

export default CreateUser;