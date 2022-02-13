import firebase from 'firebase';
require('firebase/firestore')
require('firebase/firebase-storage')

 const ShareTweet =(params) => {
     let err;
    console.log(params)
    const {caption,img,url,error,user,profile,username}=params;
    if(img){
    const imgUrl = `post/${firebase.auth().currentUser.uid}/${Math.random().toString(36)}`;
    const fileMetaData = { contentType: 'image/jpeg' };

    const task = firebase.storage().ref(imgUrl)
    const uploadTask = task.put(img,fileMetaData);
    err =uploadTask.on("state_changed",console.log(),console.error(),()=>{
        task.getDownloadURL()
        .then((link)=>{
            console.log(link)
            firebase.firestore()
                .collection('tweets')
                .add(
                    {
                        uid:firebase.auth().currentUser.uid,
                        post:link,
                        caption,
                        creation: firebase.firestore.FieldValue.serverTimestamp(),
                        profile,
                        username,
                        url
                    }
                )
                .then(function () {
                    console.log("Post uploaded");
                    return "Post Uploaded"
                }
                )
        })
    })

}
return err
 }
export default ShareTweet;
