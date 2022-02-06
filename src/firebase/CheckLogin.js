import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "./Config";

const CheckLogin=async (data)=> {
    let err;
    const { email, password } = data;
    console.log(email, password)
    await signInWithEmailAndPassword(auth ,email, password)
        .then((results) => {
            console.log(results)
        })
        .catch((error) => {
            if (error.message === "There is no user record corresponding to this identifier. The user may have been deleted.") {
                console.log("No User Found");
                err="No User Found";
                //setLoading(false)
            }
            else if (error.message === "The email address is badly formatted.") {
                console.log("Please Enter a valid E-mail")
                //setLoading(false)
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