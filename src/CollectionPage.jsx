import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import './CollectionPage.css';
function CollectionPage() {
  const [collections, setCollections] = useState([]);
  const [newCollection, setNewCollection] = useState('');
  const [collectionImages, setCollectionImages] = useState([[], [], [], [], [], [], [], []]);

  const handleAddCollection = () => {
    if (newCollection.trim() !== '') {
      setCollections([...collections, newCollection]);
      setNewCollection('');
      setCollectionImages([...collectionImages, []]); // Add an empty array for new collection
    }
  };

  const handleRemoveCollection = (index) => {
    const updatedCollections = [...collections];
    updatedCollections.splice(index, 1);
    setCollections(updatedCollections);

    const updatedImages = [...collectionImages];
    updatedImages.splice(index, 1);
    setCollectionImages(updatedImages);
  };

  const onDrop = (acceptedFiles, index) => {
    const updatedImages = [...collectionImages];
    updatedImages[index] = updatedImages[index].concat(acceptedFiles); // Keep previously added images
    setCollectionImages(updatedImages);
  };

  return (
    <div className="collection-page">
      <h1>Add Your Collection</h1>
      <input
        type="text"
        placeholder="Enter collection name"
        value={newCollection}
        onChange={(e) => setNewCollection(e.target.value)}
      />
      <button onClick={handleAddCollection}>Add</button>

      <h2>Your Collections</h2>
      <div className="collection-grid">
        {collections.map((collection, index) => (
          <div key={index} className="collection-item">
            <p>{collection}</p>

            <div className="image-dropzone">
              {/* Use useDropzone for each collection separately */}
              <Dropzone index={index} onDrop={onDrop} />

              {/* Display images */}
              {collectionImages[index].map((file, fileIndex) => (
                <img key={fileIndex} src={URL.createObjectURL(file)} alt="Collection" />
              ))}
            </div>

            <button onClick={() => handleRemoveCollection(index)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
}

// Dropzone component to handle file drop for each collection
const Dropzone = ({ index, onDrop }) => {
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => onDrop(acceptedFiles, index),
    multiple: true, // Allow multiple images
    accept: 'image/*', // Only accept image files
  });

  return (
    <div {...getRootProps()} className="dropzone-container">
      <input {...getInputProps()} />
      <p>Drag & drop images here, or click to select files</p>
    </div>
  );
};

export default CollectionPage;
