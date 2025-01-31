import React, { useState, useEffect } from "react";
import firebase from 'firebase/compat/app';
import "firebase/compat/storage";
import "firebase/compat/firestore";
import classes from './Upload.module.css'
import Singing from '../../Assets/singing.jpg'
import Man from '../../Assets/man.jpg'
import Whatsapp from '../../Assets/whatsappIcon.png'

// Initialize Firebase
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBup3lLrOk7jP_kWDbdeGyH9uGNjhjgXx8",
  authDomain: "sereng-star-bfe8f.firebaseapp.com",
  projectId: "sereng-star-bfe8f",
  storageBucket: "sereng-star-bfe8f.appspot.com",
  messagingSenderId: "39088434037",
  appId: "1:39088434037:web:ed77154d947ffd4d8b413c",
  measurementId: "G-VB30X8S7N2"
};

firebase.initializeApp(firebaseConfig);

// Get a reference to the Firebase Storage service
const storage = firebase.storage();

// Get a reference to the Firestore database
const firestore = firebase.firestore();

const App = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [image, setImage] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploading, setUploading] = useState(false);
  const [complete, setComplete] = useState('Upload')

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!image) {
      return;
    }

    setUploading(true);

    // Create a storage reference with a unique file name
    const fileName = `${Date.now()}_${image.name}`;
    const storageRef = storage.ref(fileName);

    // Upload the file to Firebase Storage
    const uploadTask = storageRef.put(image);

    // Get the download URL of the uploaded file

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setUploadProgress(progress);
      },
      (error) => {
        console.error(error);
      },
      () => {

    uploadTask.then((snapshot) => {
      snapshot.ref.getDownloadURL().then((downloadURL) => {
        setComplete('Completed')
        setUploading(false);
        setName("");
        setAge("");
        setCity("");
        setState("");
        setMobileNumber("");
        setImage(null);
        // Store the user input and the download URL in Firestore
        firestore.collection("participants").add({
          name,
          age,
          city,
          state,
          mobile_number: mobileNumber,
          image_url: downloadURL,
        });
      });
    });
  });

  };


  return (
    <div className={classes.upload}>
      <div className={classes.uploadTitle}>Upload Here</div>
      <div className={classes.online}>
        <img className={classes.uploadImg} src={Singing} alt="" />
      <form className={classes.form} onSubmit={handleSubmit}>
        <label>
          Name:
          <input required type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label>
          Age:
          <input required type="text" value={age} onChange={(e) => setAge(e.target.value)} />
        </label>
        <br />
        <label>
          City:
          <input required type="text" value={city} onChange={(e) => setCity(e.target.value)} />
        </label>
        <br />
        <label>
          State:
          <input required type="text" value={state} onChange={(e) => setState(e.target.value)} />
        </label>
        <br />
        <label>
          Mobile Number:
          <input required type="text" value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} />
        </label>
        <br />
        <label>
          Video:
          <input required type="file" onChange={handleFileChange} />
        </label>
        <br />
        <button className={classes.button} type="submit">{complete}</button>
        {uploading && <progress className={classes.progress} value={uploadProgress} max="100"/> }
      </form>
      </div>
      <div className={classes.orTitle}>OR</div>
      <div className={classes.send}>
      <div className={classes.whatsapp}>
        <img className={classes.man} src={Man} alt="" />
        <div className={classes.sendWhat}>
          <div className={classes.whatImg}>
            <img className={classes.icon} src={Whatsapp} alt="" />
          </div>
          <div className={classes.here}>Whatsapp Your Video Here</div>
          <div className={classes.number}>+91&nbsp; 8709880415</div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default App;