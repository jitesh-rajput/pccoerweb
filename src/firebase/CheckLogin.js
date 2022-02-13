import firebase from "firebase"

const CheckLogin=async(data)=> {
    let err;
    const { email, password } = data;
    await firebase.auth().signInWithEmailAndPassword(email, password)
        .then((results) => {
           const token =firebase.auth().currentUser.refreshToken
           const user=firebase.auth().currentUser.uid
           sessionStorage.setItem("user",user)
           sessionStorage.setItem("token",token)
            err="Login"
        })
        .catch((error) => {
            if (error.message === "There is no user record corresponding to this identifier. The user may have been deleted.") {
                err="No User Found";
                //setLoading(false)
            }
            else if (error.message === "The email address is badly formatted.") {
                err="Please enter valid mail"
            }
            else {
                console.log(error.message)
                err=error.message;
                //setLoading(false)
            }
        })
        return err;
}

export default CheckLogin;