import React, { useState } from 'react';
import upload from '../../assets/Icons/Upload.png'
import { ExchangeIcon, UploadIcon } from '../../assets/Icons/Icons';

const ImageUploader = ({onImageUpload}) => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [imageName, setImageName] = useState('');

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target.result);
        onImageUpload(e.target.result)
      };
        reader.readAsDataURL(file);
        setImageName(file.name);
    }
  };

    return (
      <>
        <div className="w-full mx-auto bg-backgroundDim rounded-md">
          <div className="flex flex-col items-center ">
            <label htmlFor="imageUpload" className="cursor-pointer">
              {selectedImage ? (
                <img
                  src={selectedImage}
                  alt="Uploaded"
                  className="w-full h-72 object-cover rounded-md"
                />
              ) : (
                <div className="w-32 h-72 flex items-center justify-center border-gray-300 rounded-lg">
                  <img className="w-12 opacity-50" src={upload} alt="" />
                </div>
              )}
            </label>
            <input
              id="imageUpload"
              type="file"
              accept="image/*"
              className="sr-only"
              onChange={handleImageChange}
            />
          </div>
        </div>
        <h1 className='text-primary flex text-sm font-bold capitalize w-fit tracking-wider text-center'>{imageName}</h1>
        <label
          htmlFor="imageUpload"
          className="cursor-pointer text-sm text-primary border border-primary rounded-md p-2 hover:bg-primary hover:text-white duration-200 tracking-wider"
        >
          {selectedImage ? (
            <span className="flex items-center gap-3">
              <ExchangeIcon className="text-lg" />
              Change Image
            </span>
          ) : (
            <span className="flex items-center gap-3">
              <UploadIcon className="text-lg" />
              Upload Image
            </span>
          )}
        </label>
      </>
    );
};

export default ImageUploader;
