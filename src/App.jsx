import {useState} from 'react';

import {storage} from './config/firebase';
import {ref, uploadBytes, getDownloadURL} from 'firebase/storage';
import {v4 as uuidv4} from 'uuid';

const App = () => {

  const [imageUrl, setImageUrl] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];

    // preview the image
    const imageBlob = URL.createObjectURL(file);
    setImageUrl(imageBlob);

    // upload the image
    const imageRef = ref(storage, `avatar/${uuidv4()}`);
    uploadBytes(imageRef, file)
      .then(snapshot => {
        return getDownloadURL(snapshot.ref);
      })
      .then(url => console.log(url))
      .catch(err => console.log(err))

  }


  return (
    <div>
      
      <div>
        <label>Upload Image</label>
        <input type='file' onChange={handleImageUpload} />
      </div>

      {imageUrl && (
        <img src={imageUrl} alt="preview" width={200} height={150} />
      )}

    </div>
  );
}

export default App;